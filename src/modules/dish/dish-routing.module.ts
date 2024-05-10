import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishComponent } from './dish/dish.component';

const routes: Routes = [
  {
    path: '',
    component: DishComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}
