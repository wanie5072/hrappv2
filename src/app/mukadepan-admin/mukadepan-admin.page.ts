import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mukadepan-admin',
  templateUrl: './mukadepan-admin.page.html',
  styleUrls: ['./mukadepan-admin.page.scss'],
})
export class MukadepanAdminPage implements OnInit {

  segmentValue = '1';
  requests: any[] = [];
  donors: any[] = [];
  lineChart: any;
  newHeight = 0;

  constructor() {}

  ngOnInit() {
    console.log('ngOnInit');
    this.donors = [
      { id: 1, name: 'Noriko Rusk', age: 25, position: 'Engineer', gender: 'Female', company: 'Consurv', photo: 'assets/images/4.png', distance: 0.5, phone: '9999900000', email: 'abc@xyz.com' },
      { id: 2, name: 'Carl Sweat', age: 22, position: 'Engineer', gender: 'Male', company: 'Consurv', photo: 'assets/images/2.png', distance: 2, phone: '9999900001', email: 'abc1@xyz.com' },
      { id: 3, name: 'Phoebe Jackson', age: 27, position: 'Engineer', gender: 'Female', company: 'Dyna', photo: 'assets/images/3.png', distance: 6, phone: '9999900002', email: 'abc2@xyz.com' },
      { id: 4, name: 'Bajrang Bali', age: 35, position: 'Engineer', gender: 'Male', company: 'Dyna', photo: 'assets/images/1.png', distance: 10, phone: '9999900003', email: 'abc3@xyz.com' },
      { id: 5, name: 'Lan T\'ang', age: 30, position: 'Engineer', gender: 'Male', company: 'Dyna', photo: 'assets/images/2.png', distance: 12, phone: '9999900004', email: 'abc4@xyz.com' },
      { id: 6, name: 'S. Dilshan', age: 45, position: 'Engineer', gender: 'Male', company: 'Dyna', photo: 'assets/images/2.png', distance: 14.5, phone: '9999900005', email: 'ab5@xyz.com' },
      { id: 7, name: 'Amy D\'Souza', age: 20, position: 'Engineer', gender: 'Female', company: 'Consurv', photo: 'assets/images/3.png', distance: 16.7, phone: '9999900006', email: 'abc6@xyz.com' }
    ];

    this.requests = [
      { id: 1, name: 'Jessika Lynch', age: 20, position: 'Engineer', gender: 'Female', company: 'Consurv', photo: 'assets/images/3.png', distance: 1, phone: '9999900010', email: 'xyz1@xyz.com' },
      { id: 2, name: 'Chris Manhattan', age: 29, position: 'IT Manager', gender: 'Male', company: 'Dyna', photo: 'assets/images/2.png', distance: 1.5, phone: '9999900020', email: 'xyz2@xyz.com' },
      { id: 3, name: 'Sanya Iyer', age: 45, position: 'Engineer', gender: 'Male', company: 'Dyna', photo: 'assets/images/4.png', distance: 3, phone: '9999900030', email: 'xyz3@xyz.com' },

    ];
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  segmentChanged(event) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }


  scroll(event) {
    const value = event.detail.scrollTop;
    console.log(value, this.newHeight);
    if(value > 40) {
      this.newHeight += 5; // this.newHeight = this.newHeight + 5
    } else {
      this.newHeight = 0;
    }
    if(value > 180 && this.newHeight <= 65) {
      this.newHeight += 50;
    }
  }

}

