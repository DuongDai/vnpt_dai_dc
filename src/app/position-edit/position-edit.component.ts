import { Component, OnInit } from '@angular/core';
import { PositionService } from '../services/position.service';
import { ActivatedRoute } from '@angular/router';
import { PositionModel } from '../models/PositionModel';


@Component({
  selector: 'app-position-edit',
  templateUrl: './position-edit.component.html',
  styleUrls: ['./position-edit.component.css']
})
export class PositionEditComponent implements OnInit {
  model:PositionModel = new PositionModel();
  constructor(
  	private route: ActivatedRoute,
  	private positionService: PositionService

  ) { }
   
  positionId:number;

  ngOnInit(): void {
    this.getPostionById();
  }

   getPostionById(){
  	this.route.params.subscribe((params) => {
  		this.positionId = params.id;
  		console.log(params.id)
  	})
  	var result:any;
  	this.positionService.getById(this.positionId).subscribe((res) =>{
  		result = res;
  	}, error => {
  		console.log(error);
  		alert('không tồn tại phòng ban với mã ID này!');
  	}, () => {
  		this.model.tenChucVu = result.object.tenChucVu;
  	})

  }

  submitData(){    
    var result: any;
  	if(this.model.formGroup.valid){
  		this.positionService.edit(
  		{
  			"id": this.positionId, 
  			"tenChucVu" : this.model.tenChucVu
  		}).subscribe(data => {

  		}, error => {
  			
  		}, () =>{
  			alert('Thay đổi thành thành công!')
  		})
  		 
  	    }
  }
}
