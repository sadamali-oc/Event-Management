import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  onLogin() {
    // Navigate to the login page or perform the desired action
    console.log('Get Started button clicked');
    
    // Example: Redirect to the login route
    // this.router.navigate(['/login']);
  }
}
