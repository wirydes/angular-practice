import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/recipeBook/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [];
  constructor() { }

  ngOnInit() {
  }

}
