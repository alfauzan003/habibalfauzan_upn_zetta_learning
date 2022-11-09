import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './navbar/navbar.component';
import { RecipesComponent } from './resep/recipes.component';
import { ListResepComponent } from './resep/list-resep/list-resep.component';
import { RecipeDetailComponent } from './resep/detail-resep/detail-resep.component';
import { ItemResepComponent } from './resep/list-resep/item-resep/item-resep.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingService } from './shopping/shopping.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './resep/recipe-start/recipe-start.component';
import { EditResepComponent } from './resep/edit-resep/edit-resep.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      RecipesComponent,
      ListResepComponent,
      RecipeDetailComponent,
      ItemResepComponent,
      ShoppingComponent,
      ShoppingEditComponent,
      DropdownDirective,
      RecipeStartComponent,
      EditResepComponent,
   ],
   imports: [BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule],
   providers: [ShoppingService],
   bootstrap: [AppComponent],
})
export class AppModule {}
