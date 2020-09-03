import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { DepartmentModel } from '../models/DepartmentModel';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})	
export class DepartmentEditComponent implements OnInit {

  model:DepartmentModel = new DepartmentModel();
  constructor(
  	private departmentService: DepartmentService,
  	private route: ActivatedRoute
  ) { }
  tenPhongBan: String;
  phongBanId: number;
  ngOnInit( ): void {
	this.getDepartmentById(); 
	
  }
  
  getDepartmentById(){
  	this.route.params.subscribe((params) => {
  		this.phongBanId = params.id;
  		console.log(params.id)
  	})
  	var result:any;
  	this.departmentService.getById(this.phongBanId).subscribe((res) =>{
  		result = res;
  	}, error => {
  		alert('không tồn tại danh mục này')
  	}, () => {
  		this.model.tenPhongBan = result.object.tenPhongBan;
  	})

  }

  submitData(){    
    var result: any;
  	if(this.model.formGroup.valid){
  		this.departmentService.edit(
  		{
  			"id": this.phongBanId, 
  			"tenPhongBan" : this.model.tenPhongBan
  		}).subscribe(data => {

  		}, error => {
  			
  		}, () =>{
  			alert('Thay đổi thành thành công!')
  		})
  		 
  	    }
  }

}
