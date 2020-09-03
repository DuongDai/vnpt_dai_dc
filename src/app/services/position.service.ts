import { Injectable } from '@angular/core';
import {API} from './api';
@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private api: API) { }

  getList(){
    return this.api.get('/api/DanhBa/list-chuc-vu');
  }

  add(data:any){
  	return this.api.post(`/api/DanhBa/add-chuc-vu`, data);
  }

  edit(data: any){
	return this.api.put(`/api/DanhBa/edit-chuc-vu`, data);
  }

  delete(id:number){
  	return this.api.delete(`/api/DanhBa/delete-chuc-vu/${id}`)
  }

  getById(id:number){
    return this.api.get(`/api/DanhBa/get-chuc-vu/${id}`)
  }
}
