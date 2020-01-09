import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Qualification } from './Qualification';



@Injectable({

  providedIn: 'root'
})
export class QualificationService {

  constructor(private http:HttpClient) { }

  public save(data:Qualification){
     return  this.http.post<Qualification>("http://localhost:8080/Qualification/save",data);
  } 

  public getAll():Observable<Qualification[]>{
     return this.http.get<Qualification[]>("http://localhost:8080/Qualification/all");
  }

  public getById(id):Observable<Qualification>{
     return this.http.get<Qualification>("http://localhost:8080/Qualification/"+id);
  }
  public deleteById(id){
    return this.http.delete("http://localhost:8080/Qualification/"+id);
 }
}
