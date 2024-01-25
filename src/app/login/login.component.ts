import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 export class LoginComponent {
  constructor(private router:Router){
    
  }
  checkLogin(){
   this.router.navigate(['/home'])
  }
 }
