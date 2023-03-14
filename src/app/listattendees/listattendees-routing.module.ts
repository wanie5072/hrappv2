import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListattendeesPage } from './listattendees.page';

const routes: Routes = [
  {
    path: '',
    component: ListattendeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListattendeesPageRoutingModule {}
