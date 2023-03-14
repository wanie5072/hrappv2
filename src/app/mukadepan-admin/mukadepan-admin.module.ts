import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MukadepanAdminPageRoutingModule } from './mukadepan-admin-routing.module';

import { MukadepanAdminPage } from './mukadepan-admin.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MukadepanAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MukadepanAdminPage]
})
export class MukadepanAdminPageModule {}
