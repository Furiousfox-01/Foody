import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isShadow: boolean = false;
  shadowOn() {
    this.isShadow = !this.isShadow;
  }
}
