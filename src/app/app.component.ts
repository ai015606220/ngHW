import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  itemDetail;
  toDoList: any[] = [];

  constructor (
    private router: Router
  ) {}

  showItemDetail(item) {
    this.itemDetail = item;
  }

  addToDoItem(item) {
    this.toDoList.push(item);
  }

  turnToPage(page) {
    this.router.navigateByUrl(`/${page}`);
  }
}
