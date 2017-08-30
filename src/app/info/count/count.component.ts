import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {

  @Input() toDoList;

  constructor() { }

  ngOnInit() {
  }

  getLenght(type) {
    let count = 0;
    for (const item of this.toDoList) {
      if (item.type === type) {
        count++;
      }
    }
    return count;
  }
}
