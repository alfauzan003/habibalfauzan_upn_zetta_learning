import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './resep/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeStartComponent } from './resep/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './resep/detail-resep/detail-resep.component';
import { EditResepComponent } from './resep/edit-resep/edit-resep.component';

const appRoutes: Routes = [
   { path: '', redirectTo: '/recipes', pathMatch: 'full' },
   // jika path kosong, akan redirect ke halaman recipes
   {
      path: 'recipes',
      component: RecipesComponent,
      children: [
         { path: '', component: RecipeStartComponent },
         { path: 'new', component: EditResepComponent },
         { path: ':id', component: RecipeDetailComponent },
         { path: ':id/edit', component: EditResepComponent },
      ],
   },
   { path: 'shopping-list', component: ShoppingComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(appRoutes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
