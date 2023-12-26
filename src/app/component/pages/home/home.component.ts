import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/Shared/models/food';
import { FoodService } from 'src/app/services/foodServices/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[] =[]
  searchTerm =''

  constructor(private foodServices: FoodService, activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
      this.foods = this.foodServices.getAllFoodsBySearchTerm(params['searchTerm'])
    else
    this.foods = this.foodServices.getAll()
    })
    
  }

  ngOnInit(): void {
    console.log(this.foods)
  }

}
