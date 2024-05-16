import { Component, Input } from '@angular/core';
import { Food } from '../../dish/services/food-interface';
import { AddToCartService } from '../../../shared/services/add-to-cart.service';

@Component({
  selector: 'app-sidebar-card',
  templateUrl: './sidebar-card.component.html',
  styleUrl: './sidebar-card.component.scss',
})
export class SidebarCardComponent {
  @Input() cartData: Food = {} as Food;
  title: string = '';
  cost: number = 0;
  quantity: number = 0;
  constructor(private cartService: AddToCartService) {}
  ngOnInit() {
    this.title = this.cartData.title || this.cartData.name;
    this.cost = this.cartData.price;
    this.quantity = this.cartData.count;
    // console.log('data added', this.cartData);
  }

  get totalCost() {
    return this.cost * this.quantity;
  }
  plusCount(): void {
    this.quantity++;
    // console.log(this.quantity);
    this.addTocart();
  }
  minusCount(): void {
    if (this.quantity != 1) this.quantity--;
    this.addTocart();
  }

  addTocart() {
    this.cartService.addToCart(
      this.cartData,
      this.quantity - this.cartData.count
    );
    // console.log('done', this.cartData, this.quantity);
  }
  deleteItem(): void {
    this.cartService.deleteItem(this.cartData);
    // console.log('deleting *********', this.cartData);
  }
}
