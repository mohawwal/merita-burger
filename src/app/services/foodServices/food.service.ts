import { Injectable } from '@angular/core';
import { Food } from 'src/app/Shared/models/food';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll() {
    return sample_foods
  }

  getAllFoodsBySearchTerm(searchTerm:string) {
    return this.getAll().filter(food => 
      food.name.toLowerCase()
      .includes(searchTerm.toLowerCase())
    )
  }

  getFoodsById(foodId:string):Food {
    return this.getAll().find(food => 
      food.id === foodId
    ) ?? new Food()
  }


}
