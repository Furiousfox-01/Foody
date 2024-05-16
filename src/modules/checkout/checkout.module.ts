import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutListComponent } from './checkout-list/checkout-list.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [CheckoutComponent, CheckoutListComponent, PopupComponent],
  imports: [CommonModule, CheckoutRoutingModule, SharedModule],
  bootstrap: [CheckoutComponent],
})
export class CheckoutModule {}
