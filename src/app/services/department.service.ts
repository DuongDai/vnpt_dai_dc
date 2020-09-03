import { Injectable } from '@angular/core';
import {API} from './api';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {


  constructor(
    private api: API
  	) { }


  getList(){
    return this.api.get('/api/DanhBa/list-phong-ban');
  }

  add(data:any){
  	return this.api.post('/api/DanhBa/add-phong-ban', data);
  }

  edit(data: any){
	return this.api.put(`/api/DanhBa/edit-phong-ban`, data);
  }

  delete(id:number){
  	return this.api.delete(`/api/DanhBa/delete-phong-ban/${id}`)
  }

  getById(id:number){
    return this.api.get(`/api/DanhBa/get-phong-ban/${id}`)
  }
}
