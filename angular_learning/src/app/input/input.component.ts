import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  newItemName: string = '';
  newItemStatus: string = '';
  @Output('itCreated') itemCreated = new EventEmitter<{
    item_name: string;
    item_status: string;
  }>();
  @ViewChild('itemNameInput') itemNameInput: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  addItem(name: HTMLInputElement) {
    console.log(this.itemNameInput);
    this.itemCreated.emit({
      item_status: this.newItemStatus,
      item_name: this.itemNameInput.nativeElement.value,
    });
    this.newItemName = '';
    this.newItemStatus = '';
  }
}
