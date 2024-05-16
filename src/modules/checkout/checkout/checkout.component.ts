import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AddToCartService } from '../../../shared/services/add-to-cart.service';
import { Food } from '../../dish/services/food-interface';
import { HttpClient } from '@angular/common/http';
import { PopupComponent } from '../popup/popup.component';
import { userDetails } from '../checkout-interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  @ViewChild(PopupComponent) popupComponent!: PopupComponent;
  constructor(
    private router: Router,
    private addToCart: AddToCartService,
    private http: HttpClient
  ) {}
  cartData: Food[] = [];
  private email = 'angular017@gmail.com';
  isPopupOpen: boolean = false;
  navigateToDishes() {
    this.router.navigate(['dish/1']);
  }

  ngOnInit() {
    this.addToCart.cartItems$.subscribe((data) => (this.cartData = data));
    if (this.cartData.length > 0) {
      this.addData();
    }
  }

  addData(): void {
    this.getResult().subscribe({
      next: (data: any) => console.log(data),
      error: (err: any) => {
        console.log(err);

        // this.openPopup();
      },
    });
  }

  openPopup(): void {
    this.isPopupOpen = true;
  }

  closePopup(): void {
    this.isPopupOpen = false;
  }

  onPopupSubmit(userData: userDetails) {
    console.log('User Data:', userData);
    this.registerNow(userData);
    this.closePopup(); // Call payNow function to proceed with payment after user data submission
  }

  registerNow(data: userDetails) {
    this.http
      .post<any>('https://192.168.1.149:7117/api/login/add', {
        ...data,
      })
      .subscribe({
        next: (data: any) => {
          console.log(data);
          alert('user createrd successfully');
          this.addData();
        },
        error: (err: any) => {
          console.log(data);
          return console.log(err);
        },
      });
  }

  getResult() {
    const newArray = this.cartData.map((item) => ({
      ItemId: item.itemId || item.id,
      Quantity: item.count,
      Email: this.email,
    }));
    console.log(newArray);
    return this.http.post<any>(
      'https://192.168.1.149:7117/api/cart/add',
      newArray
    );
  }
  proceedToPay() {
    const newArray = this.cartData.map((item) => ({
      ItemId: item.itemId || item.id,
      Quantity: item.count,
      Email: this.email,
    }));
    this.http
      .post<any>('https://192.168.1.149:7117/api/checkout', newArray)
      .subscribe({
        next: (data: any) => {
          console.log(data);
          alert('Payment Successfull');
        },
        error: (err: any) => console.log(err),
      });
  }
}
