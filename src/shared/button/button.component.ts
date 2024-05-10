import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { RotationService } from '../../modules/login/services/rotation.service';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() value: string | undefined;
  @Input() visible: boolean | undefined;
  @Output() action = new EventEmitter<{ actionType: any }>();
  @Input() btnType: string | undefined;
  variant: boolean = false;

  constructor(private rotationService: RotationService) {}
  ngOnInit() {
    if (this.value == 'Order Now' || this.btnType == 'secondary') {
      this.variant = true;
    }
  }
  rotateToNextChild() {
    this.rotationService.rotate();
  }

  handleButton() {
    if (this.value != 'Order Now') {
      this.rotateToNextChild();
    } else this.action.emit({ actionType: 'Order Now' });
  }
}
