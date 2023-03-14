import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListattendeesPageRoutingModule } from './listattendees-routing.module';

import { ListattendeesPage } from './listattendees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListattendeesPageRoutingModule
  ],
  declarations: [ListattendeesPage]
})
export class ListattendeesPageModule {}
