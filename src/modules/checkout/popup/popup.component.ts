import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent {
  @Output() submitForm = new EventEmitter<any>();

  name: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';
  address: string = '';

  onSubmit() {
    const userData = {
      Name: this.name,
      Email: this.email,
      Password: this.password,
      Phone: this.phone,
      Address: this.address,
    };
    this.submitForm.emit(userData);
  }
}
