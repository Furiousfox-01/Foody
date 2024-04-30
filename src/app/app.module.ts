import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './button/button.component';
import { LoginOtpComponent } from './login-otp/login-otp.component';
import { LoginNumComponent } from './login-num/login-num.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeModule } from '../home/home.module';
import { DishesModule } from '../dishes/dishes.module';
import { PaymentModule } from '../payment/payment.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    LoginOtpComponent,
    LoginNumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    DishesModule,
    PaymentModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
