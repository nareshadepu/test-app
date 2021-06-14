import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { dummyData } from './table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = ['select', 'itemId', 'productName', 'actualPrice', 'discountPrice', 'stockAvailable', 'index'];
  dataSource = new MatTableDataSource<dummyData>();

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  selection = new SelectionModel<dummyData>(true, []);
  filterValue: string = '';
  isLoading: boolean = false;
  dataSourceCount: any;

  constructor(private HttpService: RestService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.isLoading = true;
    let res = this.HttpService.getUserData();
    res.subscribe((report) => (this.dataSource.data = report as dummyData[])
    );
    this.dataSourceCount = this.dataSource.data.length;
    // this.HttpService.getUserData().subscribe((response: dummyData[]) => {
    //   this.dataSource.data = response;
    //   this.dataSourceCount = response.length;
    // });
    this.isLoading = false;
  }
  applyFilter(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterValueClear() {
    this.dataSource.filter = '';
    this.filterValue = '';
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
