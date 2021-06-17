import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserTableComponent } from './user-table/user-table.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserTableComponent },
  { path: 'create-customer', component: CreateCustomerComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
