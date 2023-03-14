import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaverulesPageRoutingModule } from './leaverules-routing.module';

import { LeaverulesPage } from './leaverules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaverulesPageRoutingModule
  ],
  declarations: [LeaverulesPage]
})
export class LeaverulesPageModule {}
