import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  
  listDepartments = [];
  countResults = 0;
  phongBanId:number;

  constructor(
  	private departmentService: DepartmentService,
  ) { }
 
  ngOnInit(): void {
  	this.getDepartments(); // default function when page load
  }


  getDepartments(){
  	var result: any ;
  	this.departmentService.getList().subscribe(data =>{
  		result = data;
  		console.log(result);
  	}, err => {
  		console.log(err)
  	},() => {
  		this.listDepartments = result.object.items;
  		this.countResults = result.object.total;
  	});
  }

  deletePhongBan(id: number){
  	if(confirm('Bạn có chắc muốn xóa phòng ban này chứ?')){
  		this.departmentService.delete(id).subscribe(res => {
  			
  		}, err => {
  			console.log(err);
  		}, () => {
  			alert('Xóa phòng ban thành công');
  			this.getDepartments();
  		})
  	}
  }


}
