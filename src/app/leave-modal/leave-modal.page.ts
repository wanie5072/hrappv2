import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-leave-modal',
  templateUrl: './leave-modal.page.html',
  styleUrls: ['./leave-modal.page.scss'],
})
export class LeaveModalPage implements OnInit {

  userData:any={};

  constructor(
    private modal:ModalController,
    private storage:StorageService,
    private authService:AuthService,
    private httpService:HttpService
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

  getDate(date)
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

  rejectLeave()
  {
    //NOTE: Change action to reflect reject action
    this.httpService.post('leave/updateapprove',{leaveid:this.userData.leavedetailid,action:1})
    .subscribe(res=>{
      console.log(res);
      this.close();
    })
  }


  approveLeave()
  {
    this.httpService.post('leave/updateapprove',{leaveid:this.userData.leavedetailid,action:1})
    .subscribe(res=>{
      console.log(res);
      this.close();
    })


  }


}
