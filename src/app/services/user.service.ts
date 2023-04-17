import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string= "http://192.168.100.10:8000/";

  constructor(private http:HttpClient) { }

  getDoner(){
    return this.http.get(this.baseUrl)
  }
  deleteUser(id:any){
    return this.http.delete(this.baseUrl+'delete/'+id)
  }
  addDoner(data:any){
    return this.http.post(this.baseUrl,data)
  }
}
