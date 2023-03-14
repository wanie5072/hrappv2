import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaverulesPage } from './leaverules.page';

const routes: Routes = [
  {
    path: '',
    component: LeaverulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaverulesPageRoutingModule {}
