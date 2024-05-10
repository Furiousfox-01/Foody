import { Component } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.scss'
})
export class DishComponent {
  category:string[] = ['Dessert','Ice cream','Snacks','Starters']
  btnType:string = 'secondary'
}
