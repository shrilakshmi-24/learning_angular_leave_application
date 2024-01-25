import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HolidaycalendarComponent } from './holidaycalendar/holidaycalendar.component';
import { HeaderComponent } from './holidaycalendar/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LeavesComponent } from './leaves/leaves.component';
import { LeavesAdminComponent } from './leaves-admin/leaves-admin.component';
import { HomeComponent } from './home/home.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HolidaycalendarComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LeaveApplicationComponent,
    SideBarComponent,
    LeavesComponent,
    LeavesAdminComponent,
    HomeComponent,
    LeaveHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
