import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  filterValue: string = '';
  isFilteredValue: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(val: string) {
    console.log(val);
    this.isFilteredValue = val;
    alert('You have searched ' + this.isFilteredValue);
  }

  filterValueClear() {
    this.filterValue = '';
    this.isFilteredValue = '';
  }

  profileView() {
    alert('Double clicked')
  }

}
