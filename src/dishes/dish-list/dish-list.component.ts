import { Component } from '@angular/core';
import { FoodDataService } from '../../app/services/food-data.service';
import { Food } from '../../app/services/food-interface';
import { Observable } from 'rxjs';
@Component({
  selector: 'dish-list',
  templateUrl: './dish-list.component.html',
  styleUrl: './dish-list.component.scss',
})
export class DishListComponent {
  foods: Food[] = [];
  temps: Observable<any[]> | undefined;
  constructor(private foodDataService: FoodDataService) {}
  ngOnInit() {
    // this.getData().subscribe((data: Food[]) => {
    //   this.foods = data;
    // });
    this.temps = this.getData();
  }

  getData(): Observable<Food[]> {
    return this.foodDataService.getFoodData();
  }
  ngOnDestroy() {
    
  }
}
