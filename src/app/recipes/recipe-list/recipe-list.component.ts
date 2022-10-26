import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Cheese Pizza',
      'This is an Italian Dish',
      'https://live.staticflickr.com/3374/3572925000_693b458fcb_b.jpg'
    ),
    new Recipe(
      'Cheese Burst Pizza',
      'This is an Italian Dish',
      'https://www.dominos.co.in//files/items/_1346164951.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
