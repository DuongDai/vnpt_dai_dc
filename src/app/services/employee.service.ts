import { Injectable } from '@angular/core';
import {API} from './api';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private api: API) { }

  getList(){
    return this.api.get('/api/DanhBa/list-nhan-vien');
  }

  add(data:any){
  	return this.api.post('/api/DanhBa/add-nhan-vien', data);
  }

  edit(data: any){
	return this.api.put(`/api/DanhBa/edit-nhan-vien`, data);
  }

  delete(id:number){
  	return this.api.delete(`/api/DanhBa/delete-nhan-vien/${id}`)
  }

  getById(id:number){
    return this.api.get(`/api/DanhBa/get-nhan-vien/${id}`)
  }

}
