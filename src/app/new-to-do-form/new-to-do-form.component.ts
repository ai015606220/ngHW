import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataServiceService } from '../data-service.service';

import { newToDoItem } from './newItem';

import { response_userList } from '../interfaceList';

import 'rxjs/Rx';

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

  userList: any;

  newItem: any = new newToDoItem(
    '',
    'Normal',
    12,
    ''
  );

  ngOnInit() {
    this.dataService.getUserList()
    .subscribe(
      value => {
        this.userList = value;
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('complete');
      }
    );
  }

  addItem() {
    this.newToDoItem.emit(this.newItem);
  }

  toJsonString(obj) {
    return JSON.stringify(obj);
  }

}
