import { Component, OnInit } from '@angular/core';
import { LoadingController,NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { SettingComponent } from 'src/app/setting/setting.component';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-mukadepan-hod',
  templateUrl: './mukadepan-hod.page.html',
  styleUrls: ['./mukadepan-hod.page.scss'],
})
export class MukadepanHodPage implements OnInit {

  showStatus: boolean = false;
  

  public postData = {
    staff_id: '',
    action: 0,
    staff_name: '',
    checkin: '',
    checkout: '',
    id: '',
    location: '',
  }

  public displayUserData: any;
  public displayUserData2: any[] = [];
  userInfo:any={};
  sid:any;

  public postDataa = {
    staff_id: '',
    action: 2,
  }

  leaveDetail:any={}
  location:any;
  today = new Date();
  public myimage = 'assets/images/clock_in.png';

  async settingsPopover(ev: any) {
    const siteInfo = { id: 1, name: 'edupala' };
    const popover = await this.popoverController.create({
      component: SettingComponent,
      event: ev,
      cssClass: 'popover_setting',
      componentProps: {
        site: siteInfo
      },
      translucent: true
    });

    popover.onDidDismiss().then((result) => {
      console.log(result.data);
    });

    return await popover.present();
    /** Sync event from popover component */

  }
  constructor(private router: Router,
    private toastCtrl: ToastController, 
    private authService: AuthService,
    private storageService: StorageService,
    private nav:NavController,
    private loading:LoadingController,
    private popoverController: PopoverController,
    private changeRef: ChangeDetectorRef,
    ) { 
    this.startTime();
      
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  
  async ionViewWillEnter()
  {

    let loader=await this.loading.create({
      message:'Loading...',
      spinner:'bubbles'
    })

    loader.present();

    this.authService.getUserDataPromise()
    .then((res:any={})=>{
      // console.log(res);
      this.userInfo=res;


      this.authService.leavedetailPromise({staffid:this.userInfo.staff_id})
      .then(res=>{
        console.log(res);
        this.leaveDetail=res[0]
        loader.dismiss();
      },err=>{
        loader.dismiss();
        console.log(err);
      })


    },err=>{
      this.nav.navigateBack('login')
      loader.dismiss();
    })
    loader.dismiss();
  }

  ngOnInit() {
    this.authService.getUserDataPromise().then((res: any) => {
      this.displayUserData = res;
      // this.checkData.staff_id = this.displayUserData.staff_id; 
      this.sid = this.displayUserData.staff_id;
 
    this.authService.listName({staff_id: this.sid, action: 2}).subscribe((res: any) => {
      console.log('goHistory',res);
      let temp : any[] = [];
      (res.results).forEach(function (value) {
        console.log(value)
        temp.push({staff_name:value.staff_name,
        checkin:new Date(value.checkin),
        checkout:new Date(value.checkout),
        location:value.location,
        })
      });
      this.displayUserData2 = temp;
      console.log(this.displayUserData2);} )
    /*this.authService.userData$.subscribe((res: any) => {
      this.displayUserData2 = res.results;
      console.log(res);
      
    })*/
    });
  }

  /*this.authService.login(this.postData).subscribe((res: any) => {
        console.log('here',res)
        if(Array.isArray(res)) {
          this.storageService.store(AuthConstants.AUTH, res[0]);
          this.router.navigate(['./home/mukadepan']);
        } else {
          this.toastService.presentToast('Incorrect Name or Password');

        } 

      }*/

 startTime() {
    var intervalVar = setInterval(function () {
    this.today = new Date().toISOString();
  }.bind(this),500)}

  addEvent(){
  	if(this.myimage=='assets/images/clock_in.png')
  	{
      this.showToast1();
      this.checkInAction();
  		this.myimage='assets/images/clock_out.png';
  	}else{
      this.showToast2();
      this.checkOutAction();
		  this.myimage = 'assets/images/clock_in.png';
  	}
  	
  }

 checkInAction(){
  //  let checkInData={
    //  this.postData.staff_id = this.displayUserData.staff_id;
    //  this.postData.action = 0;
    //  this.postData.location = this.location;
  //  }
    //let data = this.authService.getUserData();
    //console.log('i am clicked',this.displayUserData.staff_id);
    this.postData.staff_id = this.displayUserData.staff_id;
    this.postData.action = 0;
    this.postData.location= this.location;
    this.authService.checkIn(this.postData).subscribe((res: any) => {
      // this.authService.getUserData();
      // this.changeRef.detectChanges();
      console.log('checkin',res)} )  
}

  checkOutAction(){
    //  let checkOutData={
     this.postData.staff_id = this.displayUserData.staff_id;
     this.postData.action = 1;
     this.postData.location = this.location.data;
  //  }
    // this.postData.staff_id = this.displayUserData.staff_id;
    // this.postData.action = 1;
    this.authService.checkOut(this.postData).subscribe((res: any) => {
      this.authService.getUserData();
      this.changeRef.detectChanges();
      console.log('checkout',res)} )
  }

  async showToast1(){
    await this.toastCtrl.create({
      message: "You've Check-In!",
      duration: 2000,
      position: 'middle',
      buttons: [{
        text: 'OK'
      }]
    }).then( res => res.present());
    // document.getElementById("status").innerHTML = "You've Checked-In!";
  }

  async showToast2(){
    await this.toastCtrl.create({
      message: "You've Check-Out!",
      duration: 2000,
      position: 'middle',
      buttons: [{
        text: 'OK'
      }]
    }).then( res => res.present());
    // document.getElementById("status").innerHTML = "You've Checked-Out!";
  }

 async showToast3(){
    await this.toastCtrl.create({
      message: "You're on Leave!",
      duration: 2000,
      position: 'middle',
      buttons: [{
        text: 'OK'
      }]
    }).then( res => res.present());
  }

  goToList(){
    this.postData.staff_id = this.displayUserData.staff_id;
    this.postData.action = 2;
    this.router.navigate(['listattendees']);
    this.authService.listName(this.postData).subscribe((res: any) => {
      console.log('golist',res)} )
  }

  
}
