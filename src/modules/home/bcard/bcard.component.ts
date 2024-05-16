import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { dataC } from '../home-template';

@Component({
  selector: 'app-bcard',
  templateUrl: './bcard.component.html',
  styleUrls: ['./bcard.component.scss'],
})
export class BcardComponent {
  @Input() categoryData: dataC = {} as dataC;
  buttonText: string = 'Order Now';
  title: string = '';
  para: string = '';
  imgSrc: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.categoryData) {
      this.title = this.categoryData.name;
      this.para = this.categoryData.description;
      this.imgSrc = this.categoryData.image;
    }
  }

  naviToDish() {
    this.router.navigateByUrl(`/dish/${this.categoryData.id}`);
  }
}
