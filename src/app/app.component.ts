import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'food-app';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      console.log(event);
    });
  }
}
