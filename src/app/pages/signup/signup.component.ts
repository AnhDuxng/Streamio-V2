import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  rememberMe: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    // Validate form inputs
    if (!this.email || !this.password || !this.confirmPassword) {
      alert('Please fill in all required fields.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Call the signup method from your LoginService
    const signupSuccessful = this.loginService.signup(this.email, this.password);

    if (signupSuccessful) {
      console.log('Signup successful');
      // Optionally, you can store the user's data in localStorage or a service
      if (this.rememberMe) {
        // Store user data for future sessions
      }
      // Redirect to the desired page after successful signup
      this.router.navigate(['/login']);
    } else {
      alert('Email already exists');
    }
  }
}