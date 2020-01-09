import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Joining } from './Joining';



@Injectable({

  providedIn: 'root'
})
export class JoiningService {

  constructor(private http:HttpClient) { }

  public save(data:Joining){
     return  this.http.post<Joining>("http://localhost:8080/Joining/save",data);
  } 

  public getAll():Observable<Joining[]>{
     return this.http.get<Joining[]>("http://localhost:8080/Joining/all");
  }

  public getById(id):Observable<Joining>{
     return this.http.get<Joining>("http://localhost:8080/Joining/"+id);
  }
  public deleteById(id){
    return this.http.delete("http://localhost:8080/Joining/"+id);
 }
}
