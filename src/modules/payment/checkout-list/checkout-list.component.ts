import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrl: './checkout-list.component.scss'
})
export class CheckoutListComponent {
    title:string = "Sambar Rice";
    price:number = 450;
    count:number = 0;
}
