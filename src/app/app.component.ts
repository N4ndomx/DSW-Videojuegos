import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopGamesComponent } from "./top-games/top-games.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, TopGamesComponent]
})
export class AppComponent {
  title = 'videojuegos';
}
