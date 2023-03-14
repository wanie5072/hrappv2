import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeavelistPage } from './leavelist.page';

const routes: Routes = [
  {
    path: '',
    component: LeavelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeavelistPageRoutingModule {}

