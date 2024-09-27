import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopGamesComponent } from "./top-games/top-games.component";
import { LandingPageComponent } from './landing-page/landing-page.component'; 
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, TopGamesComponent, LandingPageComponent, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'videojuegos';
}
