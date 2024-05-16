import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Food } from '../../modules/dish/services/food-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  private cartItemsSubject = new BehaviorSubject<Food[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  private email = 'angular017@gmail.com';

  constructor(private http: HttpClient) {
    this.cartItems$.subscribe((items) => {
      this.sendToTable(items);
    });
  }

  setToCart(items: Food[]): void {
    this.cartItemsSubject.next(items);
  }
  addToCart(item: Food, count: number): void {
    const currentItems = this.cartItemsSubject.getValue();
    const itemIndex = currentItems.findIndex((i) => {
      if (item.itemId) return i.itemId === item.itemId;
      else return i.id === item.id;
    });
    console.log(itemIndex, item, currentItems);
    if (itemIndex != -1) {
      const updatedItems = [...currentItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        count: updatedItems[itemIndex].count + count,
      };
      this.cartItemsSubject.next(updatedItems);
      console.log(updatedItems);
    } else {
      const updatedItems = [...currentItems, { ...item, count: count }];
      this.cartItemsSubject.next(updatedItems);
      console.log(updatedItems);
    }
  }
  deleteItem(item: Food) {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter((i) => {
      return i.itemId !== item.itemId;
    });
    this.cartItemsSubject.next(updatedItems);
    console.log(updatedItems);
  }

  sendToTable(cartItems: Food[]): void {
    // this.http
    //   .post<any>('https://192.168.1.149:7117/api/cart/add', { cartItems })
    //   .subscribe(
    //     (response) => {
    //       console.log('Cart data sent to backend:', response);
    //     },
    //     (error) => {
    //       console.error('Error sending cart data to backend:', error);
    //     }
    //   );
    // const newArray = cartItems.map((item) => ({
    //   ItemId: item.id,
    //   Quantity: item.count,
    //   Email: this.email,
    // }));
    // console.log(newArray);
  }
}
