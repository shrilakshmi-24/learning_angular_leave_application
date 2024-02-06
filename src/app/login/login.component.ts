// login.component.ts
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {}

  users = this.userService.users;
  loginForm: FormGroup;
  isLoggedIn: boolean = false;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  verifyLogin() {
    const { username, password } = this.loginForm.value;

    let loggedIn = this.users.find(
      (user) => user.password === password && user.username === username
    );

    if (loggedIn) {
      this.authService.isLoggedIn = true;
      this.router.navigate(['/leaves']);
    } else {
      alert('Error Logging in');
      setTimeout(() => {
        this.loginForm.reset();
      });
      
    }
  }

}
