import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/Shared/models/food';
import { CartService } from 'src/app/services/cartServices/cart.service';
import { FoodService } from 'src/app/services/foodServices/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!: Food

  constructor(activatedRouter: ActivatedRoute, 
    foodService: FoodService, 
    private cartServices: CartService, 
    private router: Router
    ){
    activatedRouter.params.subscribe((params) => {

      if(params && params['id'])
        this.food = foodService.getFoodsById(params['id'])
    })
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartServices.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }
}
