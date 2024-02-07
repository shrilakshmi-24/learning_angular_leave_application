import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HolidaycalendarComponent } from './holidaycalendar/holidaycalendar.component';
import { HeaderComponent } from './holidaycalendar/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeaveApplicationComponent } from './leaves/leave-application/leave-application.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LeavesComponent } from './leaves/leaves.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeaveHistoryComponent } from './leaves/leave-history/leave-history.component';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LeaveRequestsComponent } from './leaves/leave-requests/leave-requests.component';

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
    LeaveHistoryComponent,
    LeaveRequestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    
  ],
  providers: [AuthService,
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AppHttpInterceptor,
  //   multi: true
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
