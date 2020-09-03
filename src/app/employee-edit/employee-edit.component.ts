import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../models/EmployeeModel';
import { EmployeeService } from '../services/employee.service';
import { DepartmentService } from '../services/department.service';
import { PositionService } from '../services/position.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  model:EmployeeModel = new EmployeeModel();
  constructor(
  	 private employeesService: EmployeeService,
     private positionService: PositionService,
     private departmentService: DepartmentService,
     private route: ActivatedRoute,
     private datePipe: DatePipe) { }

  ngOnInit(): void {
  	this.getPhongBan();
  	this.getDataEmployee();

  }
  listChucVu = [];
  listPhongBan = [];
  employeeId: number;

  resPB:any;
  resCV:any;
   result:any

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
  
  getDataEmployee(){
  	this.route.params.subscribe((params) => {
  		this.employeeId = params.id;
  		console.log(params.id)
  	})
 
  	this.employeesService.getById(this.employeeId).subscribe((res) =>{
  		this.result = res;
  	}, error => {
  		alert('không tồn tại nhân viên với mã ID này!')
  	}, () => {
  		console.log(this.result);
  		this.model.maPhongBan = this.result.object.maPhongBan;
  		this.model.maChucVu = this.result.object.maChucVu;
  		this.model.hoTen = this.result.object.hoTen;
  		this.model.mail = this.result.object.mail;
  		this.model.soDienThoai = this.result.object.soDienThoai;  
  		
  		

  	})
  }


  submitData(){    
    var result: any;
    var obj = {
       // lấy dữ liệu form đổ vào đây
        "id": this.employeeId,
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
  		this.employeesService.edit(obj).subscribe(data => {
           result = data;
  		}, error => {
  			console.log(error);
  			alert('Có lỗi xẩy ra vui lòng liên hệ với bên hỗ trợ để được giải quyết!');
  		}, () =>{
  			alert('Cập nhật thành công!');
  		})
  		 
  	    }
  }


}
