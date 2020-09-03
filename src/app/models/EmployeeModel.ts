import {NgForm, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

export class EmployeeModel{
    
    hoTen: string = '';
    mail: string = '';
    soDienThoai: string = '';
    namSinh: string = '';
    anhDaiDien: string = '';
    maPhongBan: string ;
    maChucVu: string ;
    trangThai: number ;

    


    formGroup: FormGroup = null;

	constructor(){
		var fb = new FormBuilder();
		this.formGroup = fb.group({})
		this.formGroup.addControl('hoTen', new FormControl('', Validators.required));
        this.formGroup.addControl('mail', new FormControl('', Validators.required));
        this.formGroup.addControl('soDienThoai', new FormControl('', Validators.required));
        this.formGroup.addControl('maPhongBan', new FormControl('', Validators.required));
        this.formGroup.addControl('maChucVu', new FormControl('', Validators.required));		
        this.formGroup.addControl('namSinh', new FormControl('', Validators.required));
	}
}