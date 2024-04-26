import { Component,EventEmitter,HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  scrolled = false;
@Output() isShadow = new EventEmitter<boolean>();
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.scrolled = event.target.scrollTop > 0;
    this.isShadow.emit(this.scrolled);
  }
}
