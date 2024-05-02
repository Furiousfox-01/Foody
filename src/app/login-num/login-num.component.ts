import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-num',
  templateUrl: './login-num.component.html',
  styleUrl: './login-num.component.scss',
})
export class LoginNumComponent {
  buttontext: string = 'GET OTP';
  isChecked: boolean = false;
  isDisplay: boolean = false;
  termsCondition: string = `By using our app, you agree to order food for personal consumption only.
  Orders are subject to availability and payment upon ordering. Delivery
  times are estimates. Cancellations are permitted before food preparation.
  We are not liable for delays or damages. Misuse of the app is prohibited.
  Terms may change, and continued use implies acceptance. Contact us at
  [Your Contact Information] for queries.`;

  @Output() action = new EventEmitter<{ actionType: any; source: string }>();
  @Output() rotate = new EventEmitter();

  handleButtonAction(actionInfo: { source: string }): void {
    if (actionInfo.source === 'GET OTP') {
      this.isDisplay = true;
      this.rotate.emit(true);
    }
    return;
  }
}
