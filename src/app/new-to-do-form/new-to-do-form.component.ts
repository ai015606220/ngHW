import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { newToDoItem } from './newItem';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-new-to-do-form',
  templateUrl: './new-to-do-form.component.html',
  styleUrls: ['./new-to-do-form.component.scss']
})
export class NewToDoFormComponent implements OnInit {

  constructor(
    private dataService: DataServiceService
  ) { }

  @Output() newToDoItem = new EventEmitter();

  typeList = [
    'Normal',
    'Urgent',
    'Special'
  ];

  userList: any[] = this.dataService.getUserList();

  newItem: any = new newToDoItem(
    '',
    'Normal',
    12,
    ''
  );

  ngOnInit() {
  }

  addItem() {
    this.newToDoItem.emit(this.newItem);
  }

  toJsonString(obj) {
    return JSON.stringify(obj);
  }

}
