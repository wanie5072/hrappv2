import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MukadepanHodPageRoutingModule } from './mukadepan-hod-routing.module';

import { MukadepanHodPage } from './mukadepan-hod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MukadepanHodPageRoutingModule
  ],
  declarations: [MukadepanHodPage]
})
export class MukadepanHodPageModule {}
