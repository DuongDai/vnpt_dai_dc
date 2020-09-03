import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../models/EmployeeModel';
import { EmployeeService } from '../services/employee.service';
import { DepartmentService } from '../services/department.service';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  model:EmployeeModel = new EmployeeModel();
  listChucVu = [];
  listPhongBan = [];
  constructor(
     private employeesService: EmployeeService,
     private positionService: PositionService,
     private departmentService: DepartmentService
  ) { }

   selectedValue = 1;

  ngOnInit(): void {
  	this.getPhongBan();
  }

  resPB:any;
  resCV:any;
  getChucVu(){
  	this.positionService.getList().subscribe(res => {
  		this.resCV = res;
  		this.listChucVu = this.resCV.object.items;
  	}, err => {
  		console.log(err);
  		alert('Không tìm thấy chức vụ, vui lòng tạo chức vụ trước khi thêm nhân viên')
  	}, () => {

  	})
  }

  getPhongBan(){
  	let result ;
  	this.departmentService.getList().subscribe(res => {
  		this.resPB = res;
  		this.listPhongBan = this.resPB.object.items;

  	}, err => {
  		console.log(err);
  		alert('Không có phòng ban nào, vui lòng khởi tạo phòng ban trước khi thêm nhân viên!');		
  	}, () => {

  		this.getChucVu();
  	})
  }



  submitData(){    
    var result: any;
    var obj = {
       // lấy dữ liệu form đổ vào đây
        "maPhongBan": this.model.maPhongBan,
	    "maChucVu": this.model.maChucVu,
	    "trangThai": 1,
	    "hoTen": this.model.hoTen,
	    "soDienThoai": this.model.soDienThoai,
	    "mail": this.model.mail,
	    "anhDaiDien": "dai.png",
	    "namSinh": this.model.namSinh
    };
    
  	if(this.model.formGroup.valid){
  		this.employeesService.add(obj).subscribe(data => {
           result = data;
  		}, error => {
  			console.log(error)
  		}, () =>{
  			alert('Thêm thành công!')
  		})
  		 
  	    }
  }



}
