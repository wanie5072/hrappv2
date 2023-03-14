import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MukadepanAdminPage } from './mukadepan-admin.page';

const routes: Routes = [
  {
    path: '',
    component: MukadepanAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MukadepanAdminPageRoutingModule {}
