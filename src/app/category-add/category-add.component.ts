import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../models/CategoryModel';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  
  model:CategoryModel = new CategoryModel();
  constructor(
  		private categoryService:CategoryService
  	) { }

  ngOnInit(): void {
  }

  submitData(){
    
    var result: any;
  	if(this.model.formGroup.valid){
  		this.categoryService.add(
  		{
  			"categoryName" : this.model.categoryName
  		}).subscribe(data => {

  		}, error => {
  			
  		}, () =>{
  			alert('Thêm thành công nhé')
  		})
  		 
  	    }
  }
  
}
