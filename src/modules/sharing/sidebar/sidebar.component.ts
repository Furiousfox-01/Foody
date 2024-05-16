import { Component, Output, OnInit, DoCheck } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AddToCartService } from '../../../shared/services/add-to-cart.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit, DoCheck {
  cartItems: any[] = [];
  email: string = 'angular017@gmail.com';
  @Output() clicked = new EventEmitter();
  constructor(
    private addToCartService: AddToCartService,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getDataFromBack().subscribe((data: any) => {
      this.addToCartService.setToCart(data.message);
    });
  }
  onClicked() {
    this.clicked.emit();
  }
  ngDoCheck() {
    // console.log('Cart items');
    this.addToCartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  getDataFromBack() {
    return this.http.get(`https://192.168.1.149:7117/api/cart/${this.email}`);
  }
  navToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
