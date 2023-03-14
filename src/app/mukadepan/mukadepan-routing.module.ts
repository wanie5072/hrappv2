import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MukadepanPage } from './mukadepan.page';

const routes: Routes = [
  {
    path: '',
    component: MukadepanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MukadepanPageRoutingModule {}
