import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
// import { NavbarComponent } from './navbar/navbar.component';
import { DishesComponent } from './dishes.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { FoodCardComponent } from './food-card/food-card.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { SidebarCardComponent } from './sidebar-card/sidebar-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeModule } from '../home/home.module';
@NgModule({
  declarations: [DishesComponent, DishListComponent, FoodCardComponent],
  imports: [CommonModule, BrowserModule,HomeModule],
  bootstrap: [DishesComponent],
  providers: [
    provideAnimationsAsync()
  ],
})
export class DishesModule {}
