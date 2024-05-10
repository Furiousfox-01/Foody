import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishListComponent } from './dish-list/dish-list.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { SharingModule } from '../sharing/sharing.module';
import { SharedModule } from '../../shared/shared.module';
import { TestRoutingModule } from './dish-routing.module';
import { DishComponent } from './dish/dish.component';

@NgModule({
  declarations: [DishListComponent, FoodCardComponent, DishComponent],
  imports: [CommonModule, TestRoutingModule, SharingModule,SharedModule],
  bootstrap: [DishComponent],
})
export class TestModule {}
