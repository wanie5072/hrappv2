import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { observable, Observable } from 'rxjs';
import { AuthConstants } from 'src/app/config/auth-constant';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  public postData = {
    username: '',
    password: '',
    gsm: '0',
  }

  public displayUserData: any;

  constructor(private router: Router, 
    private authService: AuthService, 
    private storageService: StorageService, 
    private toastService: ToastService,
    private nav:NavController
    ) { }

  ngOnInit() {
     this.authService.userData$.subscribe((res: any) => {
      this.displayUserData = res;
    })
    // this.authService.getUserDataPromise()
    // .then((res:any={})=>{
    //   console.log(res);
    //   // this.userInfo=res;
    //   if(res)
    //   {
    //     this.router.navigate(['./home/mukadepan']);
    //     }


    //   },err=>{
    //     console.log(err);
    //   })
  }

  // ionViewWillEnter()
  // {

  // }

 passwordType: string = 'password';
 passwordIcon: string = 'eye-off';

 hideShowPassword() {
     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
     this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
 }

  validateInputs() {
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();
    let gsm = 1;//this.postData.password.trim();
    console.log( this.postData.username ,this.postData.password , this.postData.gsm)
    return ( this.postData.username && this.postData.password 
      && username.length > 0 && password.length > 0);
  }

  loginAction(){
    
    if (this.validateInputs()) {
      this.authService.login(this.postData).subscribe((res: any) => {
        console.log('here',res)
        if(res.result[0].level == 0) {
          this.storageService.store(AuthConstants.AUTH, res.result);
          this.router.navigate(['./home/mukadepan']);
        } else if(res.result[0].level == 1) {
          this.storageService.store(AuthConstants.AUTH, res.result);
          this.router.navigate(['./home-manager/mukadepan']);
        } else if(res.result[0].level == 2) {
          this.storageService.store(AuthConstants.AUTH, res.result);
          this.router.navigate(['./home-boss/mukadepan']);
        }
        else {
          this.toastService.presentToast('Incorrect Name or Password');

        }
      },
      (error: any) => {
        this.toastService.presentToast("Network Connection Error");
      }
      )

    } else {
      this.toastService.presentToast('Please Give Some Information');

    }
  }

  // async navigateToHRadmin () {
  //   await this.router.navigate(['./home-hradmin']);
  //   console.log('button is clicked');
  // }

  // async navigateToManager () {
  //   await this.router.navigate(['./home-manager/mukadepan']);
  //   console.log('button is clicked');
  // }
}
