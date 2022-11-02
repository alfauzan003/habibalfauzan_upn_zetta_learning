import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  title: string = 'Card Title';

  onAddTitle() {
    this.title = 'Title Changed';
  }
}