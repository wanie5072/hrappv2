import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StaffPageRoutingModule } from './staff-routing.module';
import { StaffPage } from './staff.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: StaffPage
      }
    ]),
    StaffPageRoutingModule
  ],
  declarations: [StaffPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StaffPageModule {}
