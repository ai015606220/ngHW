import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() toDoItem;
  @Output() showDetail = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showThisDetail(item) {
    this.showDetail.emit(item);
  }
}
