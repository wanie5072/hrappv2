import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { AuthConstants } from 'src/app/config/auth-constant';
import { Observable, Subscriber } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { PopoverController } from '@ionic/angular';
import { SettingComponent } from 'src/app/setting/setting.component';
import { ChangeDetectorRef } from '@angular/core';
/*import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from '@capacitor/core'; */

//const { PushNotifications } = Plugins;

@Component({
  selector: 'app-mukadepan',
  templateUrl: './mukadepan.page.html',
  styleUrls: ['./mukadepan.page.scss'],
})
export class MukadepanPage implements OnInit {

  today = new Date();
  public myimage = 'assets/images/clock_in.png';

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
  sname:any;
  location:any;

  public checkData = {
    staff_id: '',
    action: 2,
  }


  async settingsPopover(ev: any) {
    const siteInfo = { id: 1, name: 'hrapps dynaconsurv' };
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
    private popoverController: PopoverController,
    private changeRef: ChangeDetectorRef,
    private loading:LoadingController,
    ) { 
      this.startTime();
      
    
  }

  ngOnInit() {
    this.nav.navigateRoot('home/mukadepan');

    console.log('Initializing HomePage');
    /*
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener('registration', (token: Token) => {
      alert('Push registration success, token: ' + token.value);
      // Push Notifications registered successfully.
      // Send token details to API to keep in DB.
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
      // Handle push notification registration error here.
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        alert('Push received: ' + JSON.stringify(notification));
        // Show the notification payload if the app is open on the device.
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        // Implement the needed action to take when user tap on a notification.
      }
    );
    */
  }

  async ionViewWillEnter()
  {

    let loader=await this.loading.create({
      message:'Loading...',
      spinner:'bubbles'
    })

    loader.present();

    this.authService.getUserDataPromise().then((res: any) => {
      this.displayUserData = res;
      // this.checkData.staff_id = this.displayUserData.staff_id; 
      this.sid = this.displayUserData.staff_id;
      this.sname = this.displayUserData.staff_name;
 
    this.authService.listName({staff_id: this.sid, action: 2}).subscribe((res: any) => {
      console.log('goChecking',res);
      let temp : any[] = [];
      (res.results).forEach(function (value) {
        console.log('value',value);

        var dt = new Date(value.checkin);
        //console.log("checkin time 1",dt)
        const checkoutTime = dt.setMinutes( dt.getMinutes() + 540 );
        let checkout = new Date(checkoutTime).toISOString();

        temp.push({
          staff_name: value.staff_name,
          staff_id: value.staff_id,
          checkin: new Date(value.checkin),
          checkout: new Date(checkout),
          location: value.location,
        })
      });
      this.displayUserData2 = temp;
      loader.dismiss();
      console.log("user data 2",this.displayUserData2);} )

    });

  }

  startTime() {
    var intervalVar = setInterval(function () {
    this.today = new Date().toISOString();
  }.bind(this),500)}

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
    
    // location.reload();     //// this serves the purpose by reloading the entire app but its not what i want

    // this.navCtrl.navigateRoot('/tabs/tab2');  //// I tried this but not able to update 
  }
  
  addEvent(){
  	if(this.myimage=='assets/images/clock_in.png')
  	{
      this.showToast1();
      this.checkInAction();
      this.changeRef.detectChanges();
  		this.myimage='assets/images/clock_out.png';
      this.nav.navigateRoot('home/mukadepan');
  	}else{
      this.showToast2();
      this.checkOutAction();
      this.changeRef.detectChanges();
		  this.myimage = 'assets/images/clock_in.png';
  	}
  	
  }

  checkInAction(){
    this.postData.staff_id = this.displayUserData.staff_id;
    this.postData.staff_name = this.displayUserData.staff_name;
    this.postData.action = 0;
    this.postData.location= this.location;
    this.authService.checkIn(this.postData).subscribe((res: any) => {
      this.authService.getUserData();
      this.changeRef.detectChanges();
      console.log('checkin',res)} )  
  }

  checkOutAction(){
    this.postData.staff_id = this.displayUserData.staff_id;
    this.postData.staff_name = this.displayUserData.staff_name;
    this.postData.action = 1;
    this.postData.location = this.location.data;
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
    window.location.reload();
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

  refresh() {
    this.changeRef.detectChanges();
  }

}







/*** 
  showStatus: boolean = false;
  async ionViewWillEnter()
  {

    let loader=await this.loading.create({
      message:'Loading...',
      spinner:'bubbles'
    })

    loader.present();

    this.authService.getUserDataPromise().then((res: any) => {
      this.displayUserData = res;
      // this.checkData.staff_id = this.displayUserData.staff_id; 
      this.sid = this.displayUserData.staff_id;
 
    this.authService.listName({staff_id: this.sid, action: 2}).subscribe((res: any) => {
      console.log('goChecking',res);
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
      loader.dismiss();
      console.log(this.displayUserData2);} )

    });

  }
}
  ***/
