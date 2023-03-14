import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  public displayUserData: any;
  public displayUserData2: any[] = [];
  userInfo:any={};

  public postData = {
    staff_id: '',
    action: 2,
  }
  

  constructor(private authService: AuthService, private router: Router) { 
  }

  ngOnInit() {
    this.authService.userData$.subscribe((res: any) => {
      this.displayUserData = res;
      this.postData.staff_id = this.displayUserData.staff_id; 
    });

    this.authService.listName(this.postData).subscribe((res: any) => {
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
  }

}
