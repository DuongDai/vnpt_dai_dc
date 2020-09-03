import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  listCategory = [] ;
  total:number = 0 ;	

  constructor(private categoryService: CategoryService) { 
  }

  ngOnInit(): void {
  	this.getCategories();
  }

  getCategories(){
  	var result: any ;
  	this.categoryService.getList().subscribe(data =>{
  		result = data;
  	}, err => {
  		console.log(err)
  	},() => {
  		this.listCategory = result.object.items;
  		this.total = result.object.total;
  	});
  }

}
