import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemInputComponent } from './item-input/item-input.component';
import { ItemOutputComponent } from './item-output/item-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemInputComponent,
    ItemOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
