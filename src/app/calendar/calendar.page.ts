import { CalendarComponent } from "ionic2-calendar";
import { Component, ViewChild, OnInit, AfterViewInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, ModalController, PopoverController, NavController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalModalPage } from 'src/app/pages/cal-modal/cal-modal.page';
import { CalendarMode, Step } from 'ionic2-calendar/calendar';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})

export class CalendarPage implements OnInit{

  eventSource = [];
  viewTitle;
  isToday:boolean;

  calendar = {
    mode:'month'as CalendarMode,
    //mode: 'month' as CalendarMode,
    currentDate: new Date(),
    queryMode: 'remote'
  }

  @ViewChild(CalendarComponent) myCal:CalendarComponent;

  public postData = {
    staff_id: '',
    leavetype: '',
    reason: '',
    currentDate: Date,
    endDate: '',
    image: '',
    halfday1: '',
    halfday2: '',
    data: '',
    status: ''
  }

  public displayUserData: any;

  userInfo:any={};
  leaveDetail:any=[];
  leave:any={};

  reason:any;
  currentDate:Date;
  endDate:any;
  halfday1:any;
  halfday2:any;

   event={
      title:'',
      desc:'',
      startTime:'',
      endTime:'',
      allDay:false
  };

  constructor(private alertCtrl: AlertController, 
    private datePipe: DatePipe,
    @Inject(LOCALE_ID)private locale : string,
    public popoverController: PopoverController,
    private authService:AuthService,
    private router: Router,
    private storageService: StorageService, 
    private nav:NavController,
    ) {}

    minDate=new Date().toISOString();
    

   ngOnInit(){
      this.authService.userData$.subscribe((res: any) => {
        this.displayUserData = res;
      });
    }

    ngAfterViewInit() {
      this.getEvents('2022-04-01', '2022-04-30');
    }

    async getEvents(start, end) {
      //console.log('get events');
      let events = [];
      let startDate = this.datePipe.transform(start, 'yyyy-MM-dd');
      let endDate = this.datePipe.transform(end, 'yyyy-MM-dd');
      
      const holidays:any = await this.getLeave(startDate, endDate);
      console.log('holidays: ', holidays);
      
      if (holidays) {
        //map() method creates a new array populated with the results of calling a provided function
        holidays.map(item => {
        //new Date(getField("dob").value);
        var datestart = new Date(item.datefrom);
        let startTime = new Date(Date.UTC(datestart.getUTCFullYear(), datestart.getUTCMonth(), datestart.getUTCDate()));
        var dateend = new Date(item.dateend);
        let endTime= new Date(Date.UTC(dateend.getUTCFullYear(), dateend.getUTCMonth(), dateend.getUTCDate()));
        
        //let endTime = new Date(Date.UTC(dateend.getUTCFullYear(), dateend.getUTCMonth(), dateend.getUTCDate()));
          
          events.push({
            title: item.reason,
            startTime: startTime,
            endTime: endTime,
            allDay: false,
          });
        });
        this.eventSource = events;
      }
      console.log('event source: ', this.eventSource);
      } 

        async getLeave(startDate, endDate) {
          
           await this.authService.getUserDataPromise()
           .then((res:any={})=>{
            console.log(1)
             this.userInfo=this.displayUserData;
             
            },err=>{
              this.nav.navigateBack('login')
            })

            await this.authService.leavedetailPromise({staffid:this.userInfo.staff_id})
             .then(res=>{
               console.log("leave detail",res);
               this.leaveDetail=res[0];
              
               //this.eventSource=this.leaveDetail;
              },err=>{
                console.log("leave detail err",err);
                return this.leaveDetail
              })

              return this.leaveDetail
            //this.viewTitle = title;
            //console.log("leave detail",res);
            
          }

      next() {
        this.myCal.slideNext();
      }
    
      back() {
        this.myCal.slidePrev();
      }
  
      today(){
        this.calendar.currentDate= new Date();
      }
  
      onViewTitleChanged(title){
        this.viewTitle=title;    
      }

      onTimeSelected(ev){
        let selected = new Date(ev.selectedTime);
        this.event.startTime = selected.toISOString();
        selected.setHours(selected.getHours()+1);
        this.event.endTime = (selected.toISOString());
      }

      onCurrentDateChanged(event:Date) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    }

    onEventSelected(event) {
      console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    }

    
  }




/*  

  public postData = {
    staff_id: '',
    leavetype: '',
    reason: '',
    currentDate: '',
    endDate: '',
    image: '',
    halfday1: '',
    halfday2: '',
    data: '',
    status: ''
  }

  public displayUserData: any;

  userInfo:any={};
  leaveDetail:any=[];
  leave:any={};

  reason:any;
  currentDate:any;
  endDate:any;
  halfday1:any;
  halfday2:any;

    event={
      title:'',
      desc:'',
      startTime:'',
      endTime:'',
      allDay:false
  };

  minDate=new Date().toISOString();
  
  eventSource = [];
  viewTitle;

  calendar = {
    mode:'month',
    //mode: 'month' as CalendarMode,
    currentDate: new Date(),
    queryMode: 'remote'
  }
    
    ionViewWillEnter(title)
    {
      this.leaveDetail=[];
      this.authService.getUserDataPromise()
      .then((res:any={})=>{
        // console.log(res);
        this.userInfo=res;

        this.authService.leavedetailPromise({staffid:this.userInfo.staff_id})
        .then(res=>{
          console.log("leave detail",res);
          this.leaveDetail=res[0];
          this.eventSource=this.leaveDetail;
        },err=>{
          console.log("leave detail",err);
        })
  
      },err=>{
        this.nav.navigateBack('login')
      })
  
      //this.viewTitle = title;
  
    }
    
    

    changeMode(mode) {
      this.calendar.mode = mode;
    }

    today(){
      this.calendar.currentDate= new Date();
    }

    onViewTitleChanged(title){
      this.viewTitle=title;    
    }

    loadEvents() {
      this.eventSource = this.leaveDetail;
    }

    // Calendar event was clicked
    async onEventSelected(event) {
      // Use Angular date pipe for conversion
      let start = formatDate(event.startTime, 'medium', this.locale);
      let end = formatDate(event.endTime, 'medium', this.locale);
      
      const alert = await this.alertCtrl.create({
        header: event.title,
        subHeader: event.desc,
        message: 'From: ' + start + '<br><br>To: ' + end,
        buttons: ['OK'],
      });
      alert.present();
    }

  
    
    onTimeSelected(ev){
      let selected = new Date(ev.selectedTime);
      this.event.startTime = selected.toISOString();
      selected.setHours(selected.getHours()+1);
      this.event.endTime = (selected.toISOString());
  
    }

   onRangeChanged = (ev: { startTime: Date, endTime: Date }) => {
      this.event.query(ev, (events) => {
          this.eventSource = events;
      });
    }


} */