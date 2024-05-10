import { Component } from '@angular/core';
import { LoginNumComponentData } from '../login-interfaces';
@Component({
  selector: 'app-login-num',
  templateUrl: './login-num.component.html',
  styleUrls: ['./login-num.component.scss'],
})
export class LoginNumComponent {
  loginNumData: LoginNumComponentData = {
    buttonText: 'GET OTP',
    isChecked: false,
    isDisplay: false,
    termsCondition:
      'By using our app, you agree to order food for personal consumption only. Orders are subject to availability and payment upon ordering. Delivery times are estimates. Cancellations are permitted before food preparation. We are not liable for delays or damages. Misuse of the app is prohibited. Terms may change, and continued use implies acceptance. Contact us at [Your Contact Information] for queries.',
  };
}
