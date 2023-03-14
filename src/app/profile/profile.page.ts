import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  back: boolean;
  displayUserData: any;
  leaveBalance:any=[];

  constructor(private router: Router,
  private authService: AuthService, private http:HttpService,
  private modalCtrl: ModalController) { }

  ngOnInit() {
    const data = this.router.url.split('/');
    console.log(data);
    // if(data[1] == 'home') this.back = true;
    // else this.back = false;
    // this.authService.userData$.subscribe((res: any) => {
    //   this.displayUserData = res;
    // })
  }

    ionViewWillEnter()
  {
    this.authService.getUserDataPromise()
    .then((res:any={})=>{
      // console.log(res);
      this.displayUserData = res;
      this.getBalance();

    })

  }

  getBalance()
  {
    this.http.get('http://consurv.no-ip.biz:3000/api/leavesummary/' + `${this.displayUserData.staff_id}`)
    .then(res=>{
      console.log(res);
      this.leaveBalance=res;
    })
  }

  close() {
  this.modalCtrl.dismiss();
}

}
