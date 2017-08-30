import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  itemDetail;
  toDoList = [];

  constructor () {}

  showItemDetail(item) {
    this.itemDetail = item;
  }

  addToDoItem(item) {
    this.toDoList.push(item);
  }
}
