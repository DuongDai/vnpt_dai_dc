import { Component, OnInit } from '@angular/core';
import { PositionService } from '../services/position.service'


@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
 
  listPositions = [];
  countResults: number = 0;
  constructor(
  	private positionService: PositionService
  ) { }

  ngOnInit(): void {
  	this.getPositions();
  }

  getPositions(){
  	var result: any ;
  	this.positionService.getList().subscribe(data =>{
  		result = data;
  		console.log(result);
  	}, err => {
  		console.log(err)
  	},() => {
  		this.listPositions = result.object.items;
  		this.countResults = result.object.total;
  	});
  }

  deletePhongBan(id: number){
  	if(confirm('Bạn có chắc muốn xóa phòng ban này chứ?')){
  		this.positionService.delete(id).subscribe(res => {
  			
  		}, err => {
  			console.log(err);
  		}, () => {
  			alert('Xóa phòng ban thành công');
  			this.getPositions();
  		})
  	}
  }

}
