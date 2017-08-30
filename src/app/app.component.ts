import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  itemDetail;
  toDoList = [];
  typeList = [
    'Normal',
    'Urgent',
    'Special'
  ];

  newItem_title;
  newItem_type = 'Normal';
  newItem_fz = 12;
  newItem_text;

  constructor () {}

  addItem() {
    const newItem = {
      'title': this.newItem_title,
      'type': this.newItem_type,
      'fz': this.newItem_fz,
      'text': this.newItem_text
    };
    this.toDoList.push(newItem);
  }
  showItemDetail(item) {
    this.itemDetail = item;
  }
  checkSelected(type) {
    if (type === 'Normal') {
      return true;
    }else {
      return false;
    }
  }
}
