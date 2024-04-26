import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from './login/login.component';
import { DishesComponent } from '../dishes/dishes.component';
import { CheckoutComponent } from '../payment/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dish',
    component: DishesComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
