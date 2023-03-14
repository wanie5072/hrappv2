import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MukadepanPageRoutingModule } from './mukadepan-routing.module';

import { MukadepanPage } from './mukadepan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MukadepanPageRoutingModule
  ],
  declarations: [MukadepanPage]
})
export class MukadepanPageModule {}
