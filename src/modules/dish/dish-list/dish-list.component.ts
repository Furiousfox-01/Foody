import { Component, Input } from '@angular/core';
import { FoodDataService } from '../services/food-data.service';
import { Food } from '../services/food-interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dish-list',
  templateUrl: './dish-list.component.html',
  styleUrl: './dish-list.component.scss',
})
export class DishListComponent {
  foods: Food[] = [];
  temps: Observable<any[]> | undefined;
  categoty: any;
  @Input() Type: string = '';
  constructor(
    private foodDataService: FoodDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const categoryId = parseInt(params.get('id') || '1');
      this.foodDataService.getFoodData(categoryId).subscribe((data) => {
        this.foods = data;
        // console.log(this.foods);
        this.updateFoods();
      });
    });
  }
  updateFoods() {
    if (this.Type === "Today's Special")
      this.foods = this.foods.filter((food) => {
        return food.todaySpecial == true;
      });
  }

  ngOnDestroy() {}
}
