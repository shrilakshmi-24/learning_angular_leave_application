import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LeavesComponent } from './leaves/leaves.component';
import { HolidaycalendarComponent } from './holidaycalendar/holidaycalendar.component';
import { LeaveApplicationComponent } from './leaves/leave-application/leave-application.component';
import { LeaveHistoryComponent } from './leaves/leave-history/leave-history.component';
import { AuthService } from './services/auth.service';
import { LeaveRequestsComponent } from './leaves/leave-requests/leave-requests.component';

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
    canActivate: [AuthService], // Assuming AuthService has canActivate method
  },
  {
    path: 'leaves',
    component: LeavesComponent,
    canActivate: [AuthService],
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
      {
        path: 'request',
        component: LeaveRequestsComponent,
      },
    ],
  },

  {
    path: 'holiday',
    component: HolidaycalendarComponent,
    canActivate: [AuthService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
