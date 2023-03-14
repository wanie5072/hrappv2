import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveapprovalPage } from './leaveapproval.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveapprovalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveapprovalPageRoutingModule {}
