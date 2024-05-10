import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '../modules/home/home.module';
// import { DishesModule } from '../modules/dishes/dishes.module';
import { HttpClientModule } from '@angular/common/http';
import { PaymentModule } from '../modules/payment/payment.module';
import { AppComponent } from './app.component';

const appComponents = [AppComponent];
@NgModule({
  declarations: [...appComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HomeModule,
    // DishesModule,
    // PaymentModule,
    // SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
