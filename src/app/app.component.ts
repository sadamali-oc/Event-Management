import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { LoginComponent } from "./pages/login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [LoginComponent],
  // imports: [LandingPageComponent]
})
export class AppComponent {
  title = 'univeristy-event-management';
  heading ='Hellow to chamalka'
}
