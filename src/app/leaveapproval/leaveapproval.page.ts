import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController, ToastController} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { LeaveModalPage } from '../../leave-modal/leave-modal.page';
import {ApproveModalPage} from '../../approve-modal/approve-modal.page';
import { StorageService } from '../../services/storage.service';
import { SettingComponent } from 'src/app/setting/setting.component';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-leaveapproval',
  templateUrl: './leaveapproval.page.html',
  styleUrls: ['./leaveapproval.page.scss'],
})
export class LeaveapprovalPage implements OnInit {
 selectTabs = 'pending';
  
  userInfo:any={};
  leaveMaster:any=[];

  approvedList:any=[];
  pendingList:any=[];

  userData:any={};
  toggleValue: boolean = false;

  constructor(
     private authService:AuthService,
    private nav:NavController,
    private loading:LoadingController,
    private modal:ModalController,
    private storage:StorageService,
    private popoverController: PopoverController,
    private router: Router,
    private changeRef: ChangeDetectorRef,
    private httpService:HttpService,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController, 
  ) { }

  ngOnInit() {
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

    this.userData=this.storage.modalData;
    console.log(this.userData);

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
        console.log('abc',res[0]);
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

  segList(list)
  {
    for(var x=0;x<list.length;x++)
    {
      if(Number(list[x].approved)==2)
      {
        this.approvedList.push(list[x]);
      }
      else if(Number(list[x].approved)<2)
      {
        this.pendingList.push(list[x]);
      }
    }
  }

  approveLeave()
  {
    this.httpService.post('leave/updateapprove',{leaveid:this.userData.leavedetailid,action:1})
    .subscribe(res=>{
      console.log(res);
      this.presentAlert();
      this.changeRef.detectChanges();
    })
  }

  checkboxClick(item) {
    if(item.checked) {
      this.approveLeave(),
      this.presentAlert()
    }
  }

 async presentAlert() {
    let alert = this.alertCtrl.create({
      subHeader: "Leave Pending for Approval",
      message: this.userInfo.staff_name,
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
            this.toggleValue == false;
            this.modal.dismiss();
          }
        },
        {
          text: 'Approved',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    if(this.toggleValue == true){
    (await alert).present();
  }
  }

}
