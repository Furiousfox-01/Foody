import { Component, EventEmitter, Output } from '@angular/core';
import { LoginNumComponentData } from '../login-interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login-num',
  templateUrl: './login-num.component.html',
  styleUrls: ['./login-num.component.scss'],
})
export class LoginNumComponent {
  @Output() emailEvent = new EventEmitter<string>();
  loginNumData: LoginNumComponentData = {
    buttonText: 'GET OTP',
    isChecked: false,
    isDisplay: false,
    termsCondition:
      'By using our app, you agree to order food for personal consumption only. Orders are subject to availability and payment upon ordering. Delivery times are estimates. Cancellations are permitted before food preparation. We are not liable for delays or damages. Misuse of the app is prohibited. Terms may change, and continued use implies acceptance. Contact us at [Your Contact Information] for queries.',
  };
  Email: string = '@gmail.com';
  hi(){
    console.log("hi");
  }
  constructor() {}
}
