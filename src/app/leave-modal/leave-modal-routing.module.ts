import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveModalPage } from './leave-modal.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveModalPageRoutingModule {}
