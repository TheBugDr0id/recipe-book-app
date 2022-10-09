import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Cheese Pizza',
      'This is an Italian Dish',
      'https://live.staticflickr.com/3374/3572925000_693b458fcb_b.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
