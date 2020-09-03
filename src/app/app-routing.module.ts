import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent	} from './login/login.component';	
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { CategoryComponent } from './category/category.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { PositionComponent } from './position/position.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component'
import { DepartmentAddComponent } from './department-add/department-add.component'

import {EmployeeEditComponent} from './employee-edit/employee-edit.component';
import {EmployeeAddComponent} from './employee-add/employee-add.component';

import {PositionEditComponent} from './position-edit/position-edit.component';
import {PositionAddComponent} from './position-add/position-add.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: "/login",
    pathMatch: 'full'
 },
 { path: 'login', component:LoginComponent }	,
 {
    path:'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'employee',
        component: EmployeeComponent,
        
      },
      { path: 'employee-add',
        component: EmployeeAddComponent,
        
      },
      { path: 'employee-edit/:id',
        component: EmployeeEditComponent,
        
      },
      { path: 'department',
        component: DepartmentComponent,
        
      },
      { path: 'department-add',
        component: DepartmentAddComponent,
        
      },
      { path: 'department-edit/:id',
        component: DepartmentEditComponent,
        
      },
      { path: 'position',
        component: PositionComponent,
      },
      { path: 'position-add',
        component: PositionAddComponent,
      },
      { path: 'position-edit/:id',
        component: PositionEditComponent,
      },
    ]

  },
  {
    path:'category',
    component: CategoryComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path:'category-add',
    component: CategoryAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path:'category-edit/:id',
    component: CategoryEditComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
