import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping-list-edit/shopping-list-edit.component';



@NgModule({
    declarations: [ShoppingListComponent, ShoppingListEditComponent],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    exports: [RouterModule, ShoppingListComponent],
    providers: []
})
export class ShoppingListModule { }
