import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-num',
  templateUrl: './login-num.component.html',
  styleUrl: './login-num.component.scss',
})
export class LoginNumComponent {
  buttontext: string = 'GET OTP';
  isChecked: boolean = false;
  contex: string = 'Number';
  isDisplay = false;
@Output() action = new EventEmitter<{ actionType: any, source: string }>();
  @Output() rotate = new EventEmitter();


  handleButtonAction(actionInfo: { actionType: string; source: string }) {
    if (actionInfo.source === 'GET OTP') {
      this.isDisplay = true;
      this.rotate.emit(true);
    }
    return;
  }
}
