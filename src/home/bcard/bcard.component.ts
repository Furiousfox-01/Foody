import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bcard',
  templateUrl: './bcard.component.html',
  styleUrl: './bcard.component.scss'
})
export class BcardComponent {
  title ="INDIAN"
  para = '"Experience India\'s Culinary Tapestry: From Spicy Delights to Flavorful Surprises. Dive into a World of Rich Aromas and Vibrant Colors. Let Every Bite Transport You to the Heart of India\'s Gastronomic Heritage. Indulge in Authentic Flavors, Crafted with Love and Tradition. Taste the Essence of India, One Dish at a Time!"'
  imgSrc = "../../assets/banana-leaf rice.png"
  constructor(private router: Router) { }

  naviToDish(){
    this.router.navigate(['dish']);
  }
}
