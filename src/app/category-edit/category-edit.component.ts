import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import { CategoryModel } from '../models/CategoryModel';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  
  categoryId:number = 0;
  model:CategoryModel = new CategoryModel();


  constructor(
  	private route:  ActivatedRoute,
  	private categoryService: CategoryService
  	) { }

  ngOnInit(): void {
  	this.getCategoryById();
  }

  getCategoryById(){
  	this.route.params.subscribe((params) => {
  		this.categoryId = params.id;
  	})
  	console.log(this.categoryId);
  	var result:any;
  	this.categoryService.getById(this.categoryId).subscribe((res) =>{
  		console.log(res);
  		result = res;
  	}, error => {
  		console.log(error);
  		alert('không tồn tại danh mục này')
  	}, () => {
  		this.model.categoryName = result.objec.categoryName;
  	})

  	console.log(this.categoryId);
  }

  submitData(){
  	if(this.model.formGroup.valid){
  		this.categoryService.edit(
  		{
  			"categoryName" : this.model.categoryName
  		})
  		 
  	    }
  }
  


}
