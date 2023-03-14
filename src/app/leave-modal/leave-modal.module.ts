import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveModalPageRoutingModule } from './leave-modal-routing.module';

import { LeaveModalPage } from './leave-modal.page';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveModalPageRoutingModule,
  ],
  declarations: [LeaveModalPage]
})
export class LeaveModalPageModule {}
