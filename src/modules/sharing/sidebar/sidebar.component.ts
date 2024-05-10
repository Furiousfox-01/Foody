import { Component,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
      @Output() clicked= new EventEmitter();
      onClicked(){
        this.clicked.emit();
      }
} 
