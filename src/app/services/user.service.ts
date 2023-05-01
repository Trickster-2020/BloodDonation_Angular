import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string= "http://192.168.100.10:8000/";

  constructor(private http:HttpClient) { }

  getDoner(){
    return this.http.get(this.baseUrl)
  }


  updatedoner(id:any,data:any):Observable<any>{   
    console.log(id)                                     //id we want to update and what is the data we want to update
    return this.http.put(this.baseUrl+'update/'+id,data)    //if we want to add id then single quote would not work we need to use the back tick to concatinate this string. Lets pass the id and whatever the data we receive from the form
  }


  deleteUser(id:any){
    return this.http.delete(this.baseUrl+'delete/'+id)
  }
  addDoner(data:any){
    // return this.http.post(this.baseUrl+"add",data)
    return this.http.post(this.baseUrl+'add/',data)
  }
}
