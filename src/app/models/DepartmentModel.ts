import {NgForm, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

export class DepartmentModel{    
    tenPhongBan: string = '';
    formGroup: FormGroup = null;

	constructor(){
		var fb = new FormBuilder();
		this.formGroup = fb.group({})
		this.formGroup.addControl('tenPhongBan', new FormControl('', Validators.required));
	}



	
}