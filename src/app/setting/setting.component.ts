import { Component, OnInit } from '@angular/core';
import { PopoverController, } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  site;
  displayUserData: any;

  public postData = {
    staff_id: '',
    action: 0,
    staff_name: '',
    checkin: '',
    checkout: '',
    id: '',
  }

  constructor(
    private authService: AuthService, 
    private router: Router,
    private nav:NavController,
    private popoverController: PopoverController) { }

  ngOnInit() {
    // this.siteInfo = this.navParams.get('site');
    console.log(this.site);
  }

  async signOut() {
    await this.authService.logout();
    this.popoverController.dismiss();
  }

  eventFromPopover() {
    this.popoverController.dismiss('edupala.com');
  }

  async navigateToProfilePage(){
    await this.router.navigate(['profile']);
    console.log('button is clicked');
    this.popoverController.dismiss();
  }

  async goToHistory(){
   
    await this.router.navigate(['history']);
    console.log('goHistory');
    this.popoverController.dismiss();
  }
}