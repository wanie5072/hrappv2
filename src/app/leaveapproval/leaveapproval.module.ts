import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveapprovalPageRoutingModule } from './leaveapproval-routing.module';

import { LeaveapprovalPage } from './leaveapproval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveapprovalPageRoutingModule
  ],
  declarations: [LeaveapprovalPage]
})
export class LeaveapprovalPageModule {}
