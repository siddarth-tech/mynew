import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Openning } from './Openning';



@Injectable({

  providedIn: 'root'
})
export class OpenningService {

  constructor(private http:HttpClient) { }

  public save(data:Openning){
     return  this.http.post<Openning>("http://localhost:8080/Openning/save",data);
  } 

  public getAll():Observable<Openning[]>{
     return this.http.get<Openning[]>("http://localhost:8080/Openning/all");
  }

  public getById(id):Observable<Openning>{
     return this.http.get<Openning>("http://localhost:8080/Openning/"+id);
  }
  public deleteById(id){
    return this.http.delete("http://localhost:8080/Openning/"+id);
 }
}
