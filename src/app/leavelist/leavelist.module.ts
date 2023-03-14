import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeavelistPageRoutingModule } from './leavelist-routing.module';

import { LeavelistPage } from './leavelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeavelistPageRoutingModule
  ],
  declarations: [LeavelistPage]
})
export class LeavelistPageModule {}
