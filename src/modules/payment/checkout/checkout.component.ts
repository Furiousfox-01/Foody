import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  constructor(private router: Router) {}
  navigateToDishes() {
    this.router.navigate(['dish']);
  }
}
