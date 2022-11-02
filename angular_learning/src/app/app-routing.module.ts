import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Module1Component } from './module1/module1.component';
import { Module2Component } from './module2/module2.component';

const routes: Routes = [
{
  path:'module1', component:Module1Component
},
{
  path:'module2', component:Module2Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
