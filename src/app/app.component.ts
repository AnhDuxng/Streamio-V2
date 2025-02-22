import { Component, HostListener } from '@angular/core';
import { LoginService } from './service/login-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'streamio';
  navbg: any;
  loginService: any;

constructor(public LoginService: LoginService) { }

  @HostListener('document:scroll') scrollover() {
    console.log(document.body.scrollTop,'scrolllength#');
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = {
        'background-color': '#000000'
      }
  } else {
      this.navbg = {}
  }
} 
}

