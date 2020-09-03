import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../models/DepartmentModel';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {

  model:DepartmentModel = new DepartmentModel();
  constructor(
  	private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {

  }

  submitData(){    
    var result: any;
  	if(this.model.formGroup.valid){
  		this.departmentService.add(
  		{
  			"tenPhongBan" : this.model.tenPhongBan
  		}).subscribe(data => {

  		}, error => {
  			
  		}, () =>{
  			alert('Thêm thành công!')
  		})
  		 
  	    }
  }

}
