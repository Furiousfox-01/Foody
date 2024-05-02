import { Component } from '@angular/core';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private _rotate: boolean = false;
  visible: boolean = false;
  leftHead:string = "Bringing the flavor game to a whole new level."
  title:string="FOOD:y"
  
  get rotate(): boolean {
    return this._rotate;
  }

  set rotate(value: boolean) {
    this._rotate = value;
    this.visible = this._rotate;
  }
}
