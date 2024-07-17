import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login-service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private router: Router, private loginService: LoginService) {}

  onSubmit() {
    // validate email and password
    if (!this.email || !this.password) {
      alert('Please provide email and password');
      return;
    }
    // If correct, login the user
    this.loginService.login(this.email, this.password);
    // Redirect to homepage
    this.router.navigate(['/home']);
  }
}