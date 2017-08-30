import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataServiceService } from '../../data-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnChanges {

  @Input() itemDetail;

  userDetail: any;

  constructor(
    private dataService: DataServiceService
  ) { }

  ngOnChanges() {
    if (this.itemDetail) {
      this.dataService.getUserInfo(this.itemDetail.userId)
        .subscribe(
          value => {
            this.userDetail = value;
          },
          err => {
            console.log(err);
          }
        );
    }
  }
  ngOnInit() { }
}
