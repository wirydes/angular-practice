import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor() { }

  ngOnInit() {
  }

}
