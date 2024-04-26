import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private _rotate: boolean = false;
  visible: boolean = false;

  get rotate(): boolean {
    return this._rotate;
  }

  set rotate(value: boolean) {
    this._rotate = value;
    // Update the visible property based on the new value of rotate
    this.visible = this._rotate;
  }
}
