import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LeavesComponent } from './leaves/leaves.component';
import { HolidaycalendarComponent } from './holidaycalendar/holidaycalendar.component';
import { LeaveApplicationComponent } from './leaves/leave-application/leave-application.component';
import { LeaveHistoryComponent } from './leaves/leave-history/leave-history.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
 
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'leaves',
    component: LeavesComponent,
    children: [
      { path: '', redirectTo: 'history', pathMatch: 'full' },
      {
        path: 'history',
        component: LeaveHistoryComponent,
      },
      {
        path: 'apply',
        component: LeaveApplicationComponent,
      },
    ],
  },

  {
    path: 'holiday',
    component: HolidaycalendarComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
