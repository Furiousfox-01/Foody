import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { dataC } from '../home-template';

@Component({
  selector: 'app-bcard',
  templateUrl: './bcard.component.html',
  styleUrls: ['./bcard.component.scss'],
})
export class BcardComponent {
  @Input() categoryData: dataC | undefined;
  buttonText: string = 'Order Now';
  title: string = '';
  para: string = '';
  imgSrc: string = '';

  constructor(private router: Router) {}

  ngOnChanges() {
    if (this.categoryData) {
      this.title = this.categoryData.name;
      this.para = this.categoryData.description;
      this.imgSrc = this.categoryData.imageUrl;
    }
  }

  naviToDish() {
    this.router.navigateByUrl('/dish');
  }
}
