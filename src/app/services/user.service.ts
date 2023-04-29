import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string= "http://127.0.0.1:8000/";

  constructor(private http:HttpClient) { }

  getDoner(){
    return this.http.get(this.baseUrl)
  }


  updatedoner(id:number,data:any){                                        //id we want to update and what is the data we want to update
    return this.http.put(`http://127.0.0.1:8000/update/${id}`,data)    //if we want to add id then single quote would not work we need to use the back tick to concatinate this string. Lets pass the id and whatever the data we receive from the form
  }


  deleteUser(id:any){
    return this.http.delete(this.baseUrl+'delete/'+id)
  }
  addDoner(data:any){
    // return this.http.post(this.baseUrl+"add",data)
    return this.http.post(this.baseUrl+'add/',data)
  }
}
