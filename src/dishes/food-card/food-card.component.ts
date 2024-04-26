import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss',],
  
})
export class FoodCardComponent {
cost:number= 40;
count:number= 0;
constructor(private router:Router){}
isPopupOpen = false;
isShow = false
openPopup(): void {
  this.isPopupOpen = true;
  this.isShow = true;
 
}

closePopup(): void {
  this.isShow = false;
  setTimeout(() => {
    this.isPopupOpen = false;
    this.router.navigate(['checkout']);
  }, 200);
}

addToBag(): void {
  this.closePopup();

}




}