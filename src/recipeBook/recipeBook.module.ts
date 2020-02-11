import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeContainerComponent } from './components/recipe-container/recipe-container.component';

@NgModule({
    declarations: [RecipeListComponent, RecipeItemComponent, RecipeDetailComponent, RecipeContainerComponent],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    exports: [RouterModule, RecipeContainerComponent],
    providers: []
})
export class RecipeBookModule { }
