import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from "ionic2-calendar";

@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.page.html',
  styleUrls: ['./cal-modal.page.scss'],
})
export class CalModalPage implements AfterViewInit {

   calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  viewTitle: string;

  selectedDate: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  
  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };
 
  modalReady = false;
 
  constructor(private modalCtrl: ModalController) { }
 
  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;      
    }, 0);
  }

  // Change current month/week/day
  next() {
    this.myCal.slideNext();
  }
 
  back() {
    this.myCal.slidePrev();
  }
 
  save() {    
    this.modalCtrl.dismiss({event: this.event})
  }
  
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onTimeSelected(ev) {    
    this.event.startTime = new Date(ev.selectedTime);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }

}
