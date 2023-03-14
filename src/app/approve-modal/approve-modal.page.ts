import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-approve-modal',
  templateUrl: 'approve-modal.page.html',
  styleUrls: ['./approve-modal.page.scss'],
})
export class ApproveModalPage implements OnInit {

  userData:any;

  constructor(
    private modal:ModalController,
    private storage:StorageService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
    this.userData=this.storage.modalData;
    console.log(this.userData);
  }

  close()
  {
    this.modal.dismiss();
  }

  getHalfDate()
  {
    if(this.userData.datehalf=="0000-00-00")
    {
      return '';
    }
    else
    {
      return this.userData.datehalf;
    }
  }

  getDate(date: string)
  {
    if(date=="0000-00-00")
    {
      return '';
    }
    else
    {
      return date;
    }
  }

}
