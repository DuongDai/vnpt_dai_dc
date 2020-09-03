import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { DepartmentService } from '../services/department.service';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  listEmployees = [];
  countResults = 0;
  nhanVienId:number;

  constructor(
   private employeeService: EmployeeService,
   private positionService: PositionService,
   private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
	this.getEmployees();
  }
  result:any;
  

 

  getChucVu(){
  	this.positionService.getList().subscribe(res => {
  	}, err => {
  		console.log(err);
  		alert('Không tìm thấy chức vụ, vui lòng tạo chức vụ trước khi thêm nhân viên')
  	}, () => {

  	})
  }

   getPhongBan(){
  	this.departmentService.getList().subscribe(res => {
  	}, err => {
  	   console.log(err);
  	   alert('Không có phòng ban nào, vui lòng khởi tạo phòng ban trước khi thêm nhân viên!');		
  	}, () => {
  		this.getChucVu();
  	})
  }

  getEmployees(){
  
  	let data = {
  		"PageNumber": 1,
  		"PageSize": 20
  	};
  	this.employeeService.getList().subscribe(res => {
  		this.result = res;
  		console.log(res);
  		this.listEmployees = this.result.object.items;
  		this.countResults = this.result.object.total;
  	}, err => {
  	    console.log(err)
  	}, () => {

  	})
  }

  deleteEmployee(id: number){
  	if(confirm('Bạn có chắc muốn xóa phòng ban này chứ?')){
  		this.employeeService.delete(id).subscribe(res => {
  			
  		}, err => {
  			console.log(err);
  		}, () => {
  			alert('Xóa nhân viên thành công');
  			this.getEmployees();
  		})
  	}
  }




}
