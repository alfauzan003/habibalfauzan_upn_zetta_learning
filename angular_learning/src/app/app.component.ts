import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular_learning';
  itemList = [
    { itemName: 'Item 1', itemStatus: 'Success' },
  ];
  onAddItem(itemData: { item_name: string; item_status: string }) {
    this.itemList.push({
      itemName: itemData.item_name,
      itemStatus: itemData.item_status,
    });
  }
  changeStatus(index: number) {
    if (this.itemList[index].itemStatus === 'Success') {
      this.itemList[index].itemStatus = 'Error';
    } else {
      this.itemList[index].itemStatus = 'Success';
    }
  }
  destroyItem(index: number) {
    this.itemList.splice(index, 1);
  }
}
