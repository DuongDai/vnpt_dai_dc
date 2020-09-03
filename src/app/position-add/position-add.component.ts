import { Component, OnInit } from '@angular/core';
import { PositionModel } from '../models/positionModel';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'app-position-add',
  templateUrl: './position-add.component.html',
  styleUrls: ['./position-add.component.css']
})
export class PositionAddComponent implements OnInit {
  
  model: PositionModel = new PositionModel();
  constructor(
  	private positionService: PositionService
  ) { }

  ngOnInit(): void {
  }

  submitData(){    
    var result: any;
  	if(this.model.formGroup.valid){
  		this.positionService.add(
  		{
  			"tenChucVu" : this.model.tenChucVu
  		}).subscribe(data => {

  		}, error => {
  			
  		}, () =>{
  			alert('Thêm thành công!')
  		})
  		 
  	    }
  }

}
