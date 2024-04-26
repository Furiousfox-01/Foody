import { Component,Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

export class ButtonComponent {

@Input() value: string | undefined;
@Input() visible: boolean | undefined;
@Output() action = new EventEmitter<{ actionType: any, source: string }>();
constructor(){
    
  console.log("button");
}
 handleButtonClick(actionType: any, source: any) {
  const actionInfo = { actionType, source }; 
  console.log("button");
  this.action.emit(actionInfo);
}

}
