import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListModule } from '../shoppingList/shoppingList.module';
import { RecipeBookModule } from '../recipeBook/recipeBook.module';
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ShoppingListModule,
    RecipeBookModule
  ],
  exports: [RouterModule, ShoppingListModule, RecipeBookModule]
})
export class AppRoutingModule { }
