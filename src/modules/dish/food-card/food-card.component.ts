import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../services/food-interface';

import { AddToCartService } from '../../../shared/services/add-to-cart.service';
@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent {
  @Input() food!: Food;
  count: number = 1;
  isPopupOpen: boolean = false;
  isShow: boolean = false;
  constructor(
    private router: Router,
    private addToCartService: AddToCartService
  ) {}
  ngOnInit(): void {}

  openPopup(): void {
    this.isPopupOpen = true;
    this.isShow = true;
  }
  plusCount(): void {
    this.count++;
  }
  minusCount(): void {
    if (this.count != 1) this.count--;
  }

  closePopup(): void {
    this.isShow = false;
    setTimeout(() => {
      this.isPopupOpen = false;
      // this.router.navigate(['checkout']);
    }, 100);
    this.count = 1;
  }

  addToBag(): void {
    // const forms = JSON.parse(localStorage.getItem('food-data') || '[]');
    // forms.push(JSON.stringify(this.food));
    // if (forms.length === 0)
    //   localStorage.setItem('food-data', JSON.stringify(this.food));
    // else localStorage.setItem('food-data', JSON.stringify(forms));
    this.addToCartService.addToCart(this.food, this.count);
    this.closePopup();
  }
  navigateTocheckout(): void {
    this.closePopup();
    this.router.navigate(['checkout']);
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
