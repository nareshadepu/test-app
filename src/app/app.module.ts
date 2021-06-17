import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';  
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { UserTableComponent } from './user-table/user-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';

// export const routes =  [
//   { path: '', component: DashboardComponent, pathMatch: 'full',label: 'Home' },
//   { path: 'user', component: UserTableComponent, label: 'User Grid' },
//   { path: 'login', component: LoginComponent},  
//  ];

@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent,
    UserTableComponent,
    DashboardComponent,
    LoginComponent,
    ChangePasswordComponent,
    CustomerComponent,
    CreateCustomerComponent
  ],
  entryComponents:[DialogBoxComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
