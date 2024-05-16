import { NgModule } from '@angular/core';
import { PaymentComponent } from './payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutListComponent } from './checkout-list/checkout-list.component';
import { SharedModule } from '../../shared/shared.module';

const paymentComponents = [
  PaymentComponent,
  CheckoutComponent,
  CheckoutListComponent,
];

@NgModule({
  declarations: [...paymentComponents],
  imports: [SharedModule],
  bootstrap: [PaymentComponent],
})
export class PaymentModule {}
