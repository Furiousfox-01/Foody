import { Component } from '@angular/core';
import { DataService } from '../../home/services/data.service';
import { dataC } from '../services/food-interface';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.scss',
})
export class DishComponent {
  btnType: string = 'secondary';
  selectedId: number | null = null;
  categoryData: dataC[] = [];
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.categoryData = data;
    });
    this.route.params.subscribe(params => {
      this.selectedId = parseInt(params['id']);
    });
  }
  navigate(id: number) {
    this.router.navigate(['/dish', id]);
  }
}
