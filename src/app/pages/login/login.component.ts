import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    console.log('Login attempted');
    console.log('Username:', this.username, 'Password:', this.password);
    // Add logic to handle login, e.g., API call to authenticate user
  }
}
