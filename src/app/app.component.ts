import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController, IonRouterOutlet } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  @ViewChild(IonRouterOutlet, { static: true })
  routerOutlet!: IonRouterOutlet;
  constructor(
    private alertCtrl: AlertController,
    private platform: Platform,
    private location: Location,
  ) {
    this.backButtonEvent();
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      if(!this.routerOutlet.canGoBack()) {
        this.backButtonAlert();
      } else {
        this.location.back();
      }
    });
  }

  async backButtonAlert() {
    const alert = await this.alertCtrl.create({
      message: 'You want to exit the app?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Close App',
        handler: () => {
          //navigator['app'].exitApp();
          interface Navigator {
            app: {
                exitApp: () => any;
            }
        }
        }
      }]
    });

    await alert.present();
  }
}//AppComponent
