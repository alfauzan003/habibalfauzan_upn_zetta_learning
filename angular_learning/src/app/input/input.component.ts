import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  newItemName: string = '';
  newItemStatus: string = '';

  public defaultStatus: string = 'Perfect';
  public defaultName: string = 'Item x';

  @Output('itCreated') itemCreated = new EventEmitter<{
    item_name: string;
    item_status: string;
  }>();

  @ViewChild('itemNameInput') itemNameInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  addItem(name: string, status: string) {
    console.log(this.itemNameInput);
    // this.itemNameList.push(this.itemName);
    // this.itemStatusList.push(this.itemStatus);
    this.itemCreated.emit({
      // item_name: this.newItemName,
      item_status: status,
      // item_name: name.value,
      item_name: name,
    });
  }
}
