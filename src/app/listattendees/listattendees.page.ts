import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { Moment } from 'moment';

@Component({
  selector: 'app-listattendees',
  templateUrl: './listattendees.page.html',
  styleUrls: ['./listattendees.page.scss'],
})
export class ListattendeesPage implements OnInit {

  displayUserData: any;
  public displayUserData2: any[] = [];

  public postData = {
    staff_id: 1,
    action: 2,
  }
  

  constructor(private authService: AuthService, private router: Router) { 
  }

  ngOnInit() {
    this.authService.listName(this.postData).subscribe((res: any) => {
      console.log('golist',res);
      let temp : any[] = [];
      (res.results).forEach(function (value) {
        console.log(value)
        temp.push({staff_name:value.staff_name,
        checkin:new Date(value.checkin)})
      });
      this.displayUserData2 = temp;
      console.log(this.displayUserData2);} )
    /*this.authService.userData$.subscribe((res: any) => {
      this.displayUserData2 = res.results;
      console.log(res);
      
    })*/
  }
  


}