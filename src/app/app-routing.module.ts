import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  /*
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home-hradmin/home-hradmin.module').then( m => m.HomeHRadminPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home-manager/home-manager.module').then( m => m.HomeManagerPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home-boss/home-boss.module').then( m => m.HomeBossPageModule)
  },
  */
  {
    path: 'welcome',
    loadChildren: () => import('./components/components.module').then( m => m.ComponentsModule)
  },
  {
    path: 'listattendees',
    loadChildren: () => import('./listattendees/listattendees.module').then( m => m.ListattendeesPageModule)
  },
  {
    path: 'leave-modal',
    loadChildren: () => import('./leave-modal/leave-modal.module').then( m => m.LeaveModalPageModule)
  },
  {
    path: 'approve-modal',
    loadChildren: () => import('./approve-modal/approve-modal.module').then( m => m.ApproveModalPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
  {
    path: 'leave',
    loadChildren: () => import('./leave/leave.module').then( m => m.LeavePageModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./staff/staff.module').then( m => m.StaffPageModule)
  },
  {
    path: 'leaverules',
    loadChildren: () => import('./leaverules/leaverules.module').then( m => m.LeaverulesPageModule)
  },
  {
    path: 'leaveapproval',
    loadChildren: () => import('./leaveapproval/leaveapproval.module').then( m => m.LeaveapprovalPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
