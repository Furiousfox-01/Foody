import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  title="FOOD:y";
  isOpen=false;
  @Input() isShadow: any;
  Open(){
    this.isOpen=!this.isOpen;
  }
  
}