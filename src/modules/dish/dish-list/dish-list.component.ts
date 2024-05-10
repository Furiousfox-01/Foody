import { Component } from '@angular/core';
import { FoodDataService } from '../services/food-data.service';
import { Food } from '../services/food-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'dish-list',
  templateUrl: './dish-list.component.html',
  styleUrl: './dish-list.component.scss',
})
export class DishListComponent {
  foods: Food[] = [];
  temps: Observable<any[]> | undefined;
  constructor(private foodDataService: FoodDataService, private httpClient: HttpClient) {}
  ngOnInit() {
    this.getData().subscribe((data: Food[]) => {
      this.foods = data;
    });
    this.temps = this.getData();
  }

  getData(): Observable<Food[]> {
    return this.foodDataService.getFoodData();
  }
  ngOnDestroy() {}
}
