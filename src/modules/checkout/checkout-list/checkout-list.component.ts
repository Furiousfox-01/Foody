import { Component, Input } from '@angular/core';
import { Food } from '../../dish/services/food-interface';

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrl: './checkout-list.component.scss',
})
export class CheckoutListComponent {
  title: string = 'Sambar Rice';
  price: number = 450;
  count: number = 0;
  @Input() cardItem: Food = {} as Food;
  constructor() {}
  ngOnInit() {
    this.title = this.cardItem.title || this.cardItem.name;
    this.price = this.cardItem.price;
    this.count = this.cardItem.count;
    console.log(this.cardItem);
  }
}
