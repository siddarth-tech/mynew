import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from './Application';



@Injectable({

  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http:HttpClient) { }

  public save(data:Application){
     return  this.http.post<Application>("http://localhost:8080/Application/save",data);
  } 

  public getAll():Observable<Application[]>{
     return this.http.get<Application[]>("http://localhost:8080/Application/all");
  }

  public getById(id):Observable<Application>{
     return this.http.get<Application>("http://localhost:8080/Application/"+id);
  }
  public deleteById(id){
    return this.http.delete("http://localhost:8080/Application/"+id);
 }
}
