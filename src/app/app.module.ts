import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

//services
import { API } from './services/api';
import { AccountService } from './services/account.service';
import { AdminComponent } from './admin/admin.component';
import { CategoryService } from './services/category.service';
import { CategoryComponent } from './category/category.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { PositionComponent } from './position/position.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { PositionAddComponent } from './position-add/position-add.component';
import { PositionEditComponent } from './position-edit/position-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    EmployeeComponent,
    DepartmentComponent,
    PositionComponent,
    DepartmentAddComponent,
    DepartmentEditComponent,
    EmployeeEditComponent,
    EmployeeAddComponent,
    PositionAddComponent,
    PositionEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
   API,
   AccountService,
   CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
