import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-item-resep',
  templateUrl: './item-resep.component.html',
  styleUrls: ['./item-resep.component.css']
})
export class ItemResepComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit() {
  }
}
