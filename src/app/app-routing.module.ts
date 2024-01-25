import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LeavesComponent } from './leaves/leaves.component';
import { HolidaycalendarComponent } from './holidaycalendar/holidaycalendar.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { HomeComponent } from './home/home.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'apply',
    component:LeaveApplicationComponent
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
  },
  {
    path:'history',
    component:LeaveHistoryComponent
  },
  {
    path:'holiday',
    component:HolidaycalendarComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

