import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { LeaveModalPage } from '../../leave-modal/leave-modal.page';
import {ApproveModalPage} from '../../approve-modal/approve-modal.page';
import { StorageService } from '../../services/storage.service';
import { SettingComponent } from 'src/app/setting/setting.component';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthConstants } from 'src/app/config/auth-constant';

@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.page.html',
  styleUrls: ['./leavelist.page.scss'],
})
export class LeavelistPage implements OnInit {
  selectTabs = 'pending';
  
  userInfo:any={};
  leaveMaster:any=[];

  approvedList:any=[];
  pendingList:any=[];
  public displayUserData: any;
  showBtn: boolean = true;
  

  constructor(
    private authService:AuthService,
    private nav:NavController,
    private loading:LoadingController,
    private modal:ModalController,
    private storage:StorageService,
    private popoverController: PopoverController,
    private router: Router,
    private storageService: StorageService, 
  ) { }

  ngOnInit() {
    this.authService.userData$.subscribe((res: any) => {
      this.displayUserData = res;
      if(this.displayUserData.level === 2) {
        this.showBtn = false;
      } else {
        this.showBtn = true;
      }
    })
  }

  async ionViewWillEnter()
  {
    let loader=await this.loading.create({
      message:'Loading...',
      spinner:'bubbles'
    })

    loader.present();

    this.approvedList=[];
    this.pendingList=[];
    this.leaveMaster=[];

    this.authService.getUserDataPromise()
    .then((res:any={})=>{
      // console.log('USER DATA',res);
      this.userInfo=res;

      //DEBUG
      this.userInfo.staff_id = this.userInfo.staff_id;
      this.userInfo.hod=0;
      //DEBUG

      this.authService.leavedetailPromise({staffid:this.userInfo.staff_id})
      .then(res=>{
        console.log('staffinfo',res[0]);
        this.leaveMaster=res[0]

        this.segList(res[0]);
        this.segList(res[1]);
        loader.dismiss();
      },err=>{
        console.log(err);
        loader.dismiss();
      })


    },err=>{
      loader.dismiss();
      this.nav.navigateBack('login')
    })

  }

  async openModal(item)
  {
    if(this.userInfo.hod==0)
    {
      this.storage.modalData=item;
      let approveModal=await this.modal.create({
        component:LeaveModalPage
      })

      approveModal.onDidDismiss().then(_=>{
        this.ionViewWillEnter();//Refresh data
      })

      approveModal.present();

    }
  }

  async openModalApprove(item)
  {
    if(this.userInfo.hod==0)
    {
      this.storage.modalData=item;
      let approveModal=await this.modal.create({
        component:ApproveModalPage
      })

      approveModal.present();

    }
  }

  sortFunc (a, b) {
    return new Date(b.datefrom).getTime() - new Date(a.datefrom).getTime();
  }

  segList(list)
  {
    for(var x=0;x<list.length;x++)
    {
      if(Number(list[x].approved)==2 && Number(list[x].hod) !== 0)
      {
        this.approvedList.push(list[x]);
      }
      else if(Number(list[x].approved)<2 && Number(list[x].hod) !== 0)
      {
        this.pendingList.push(list[x]);
        
      }
    }
  }

  // async addLeave () {
  //   await this.router.navigate(['applyleave']);
  //   console.log('apply leave for HR admin');

  // }

  async goToLeaveHistory () {
    await this.router.navigate(['./leave']);
    console.log('button is clicked');
  }
}
