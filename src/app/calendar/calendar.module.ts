import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';

import { NgCalendarModule  } from 'ionic2-calendar';
import { CalModalPageModule } from 'src/app/cal-modal/cal-modal.module';
 
import { DatePipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    NgCalendarModule,
  ],
  declarations: [CalendarPage],
  providers: [ DatePipe,
    { provide: LOCALE_ID, useValue: 'en-US' }
  ]
})
export class CalendarPageModule {}
