import {NgForm, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

export class PositionModel{
    
    tenChucVu: string = '';
    formGroup: FormGroup = null;

	constructor(){
		var fb = new FormBuilder();
		this.formGroup = fb.group({})
		this.formGroup.addControl('tenChucVu', new FormControl('', Validators.required));
	}
}