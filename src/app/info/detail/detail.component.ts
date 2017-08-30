import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnChanges {

  @Input() itemDetail;

  userDetail: any;

  constructor() { }

  ngOnChanges() {
    if (this.itemDetail) {
      this.userDetail = JSON.parse(this.itemDetail.user);
    }
  }
  ngOnInit() { }
}
