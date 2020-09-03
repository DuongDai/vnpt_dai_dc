import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username:string = '';
  password:string = '';
  message:string = '';	

  constructor(
  	  private accountService: AccountService,
  	  private router: Router
  	) { }

  ngOnInit(): void {
  }

  Login()  {
  	let result: any;
  	this.accountService.login(this.username, this.password)
  	.subscribe(res => {
  		result = res;
  		console.log(result);
  	}, error => {
  	  // 
  	  console.log(error)
    }, () => {
    	console.log('Đăng nhập thành công');
    	this.accountService.setTocken(result.object.accessToken);
    	this.router.navigateByUrl('/admin');
  	})
  	
  }

}
