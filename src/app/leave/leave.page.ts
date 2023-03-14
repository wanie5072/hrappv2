import { Component, OnInit } from '@angular/core';
import { ModalController,  NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements OnInit {

  public postData = {
    staff_id: '',
    leavetype: '',
    reason: '',
    currentDate: '',
    endDate: '',
    image: '',
    halfday1: '',
    halfday2: '',
    data: '',
    status: ''
  }

  public displayUserData: any;


  userInfo:any={};
  leaveDetail:any=[];
  leave:any={};

  reason:any;
  currentDate:any;
  endDate:any;
  halfday1:any;
  halfday2:any;
  image='';

  constructor(
    private modal:ModalController,
    private storage:StorageService,
    private authService:AuthService,
    private http:HttpService,
     private toastService: ToastService,
    private nav:NavController,
  ) { }

  ngOnInit() {
     this.authService.userData$.subscribe((res: any) => {
      this.displayUserData = res;
    })

    /*this.leaveDetail.sort((a, b) =>
    {
    //sort by date
    if (new Date(b.lastDate) > new Date(a.lastDate))
        return 1;

    if (new Date(b.lastDate) < new Date(a.lastDate))
        return -1;

    return 0;
  });*/   
  }

  sortFunc (a, b) {
    return new Date(b.datefrom).getTime() - new Date(a.datefrom).getTime();
  }

  ionViewWillEnter()
  {
    this.authService.getUserDataPromise()
    .then((res:any={})=>{
      // console.log(res);
      this.userInfo=res;

      this.authService.leavedetailPromise({staffid:this.userInfo.staff_id})
      .then(res=>{
        console.log("leave detail",res);
        this.leaveDetail=res[0]
      },err=>{
        console.log(err);
      })


    },err=>{
      this.nav.navigateBack('login')
    })

  }


}
