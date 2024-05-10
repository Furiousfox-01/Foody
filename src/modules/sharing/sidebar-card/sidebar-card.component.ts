import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-card',
  templateUrl: './sidebar-card.component.html',
  styleUrl: './sidebar-card.component.scss'
})
export class SidebarCardComponent {
   titl:string = "Sambar Rice";
   cost:number = 450;
   quantity:number = 1;

   get totalCost(){
     return this.cost * this.quantity;
   }
}
