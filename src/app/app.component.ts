import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RestService } from './rest.service';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
//import { routes } from './app-routing.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean> | any;
  routes = [
    { label: 'Home', path: 'dashboard', },
    { label: 'User Grid', path: 'user', },
    { label: 'Create Customer', path: 'create-customer', }
  ]
  // routes = routes;
  filterValue: string = '';
  sendSeletedValue: { searchKey: any; searchType: string; } | any;
  isSearchedValue: string = '';
  isShowMenu: boolean = false;
  selectedItem = '';
  constructor(public dialog: MatDialog, private HttpService: RestService, private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {

      }
    })
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: {
        title: 'Title',
        isShowFilter: 'true',
        isShowFooter: 'false',
        getDataSource: 'abcd'
      },
      width: '100%',
      minHeight: 'calc(100vh - 90px)',
      height: 'auto',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  applyFilter(val: string) {
    console.log(val);
    this.isSearchedValue = val;
    this.getFilteredData();
  }

  clearSearch() {
    this.filterValue = '';
  }

  getFilteredData() {
    this.sendSeletedValue = {
      "searchKey": this.isSearchedValue,
      "searchType": 'PROFILE'
    }
    console.log(this.sendSeletedValue, 'obj');
    this.HttpService.getData(this.sendSeletedValue).subscribe((res: any) => {
    });
  }
  changepw() {
    this.dialog.open(ChangePasswordComponent, {
      data: {
        title: 'Change Password',
      },
      width: '500px',
      disableClose: true
    });
  }

  logout() {
    this.router.navigate(['/']);
    this.authService.logout();
  }

  handleClick(selectedItem: { label: string; }) {
    this.selectedItem = selectedItem.label;
  }
}
