import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyleavePageRoutingModule } from './applyleave-routing.module';

import { ApplyleavePage } from './applyleave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyleavePageRoutingModule
  ],
  declarations: [ApplyleavePage]
})
export class ApplyleavePageModule {}
