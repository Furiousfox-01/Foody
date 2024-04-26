import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AppComponent } from '../app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CheckoutListComponent } from './checkout-list/checkout-list.component';


@NgModule({
  declarations: [
    PaymentComponent,
    CheckoutComponent,
    CheckoutListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap : [PaymentComponent]
})
export class PaymentModule { }
