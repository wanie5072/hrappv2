import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MukadepanHodPage } from './mukadepan-hod.page';

const routes: Routes = [
  {
    path: '',
    component: MukadepanHodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MukadepanHodPageRoutingModule {}
