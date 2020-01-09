import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shortlisted } from './Shortlisted';



@Injectable({

  providedIn: 'root'
})
export class ShortlistedService {

  constructor(private http:HttpClient) { }

  public save(data:Shortlisted){
     return  this.http.post<Shortlisted>("http://localhost:8080/Shortlisted/save",data);
  } 

  public getAll():Observable<Shortlisted[]>{
     return this.http.get<Shortlisted[]>("http://localhost:8080/Shortlisted/all");
  }

  public getById(id):Observable<Shortlisted>{
     return this.http.get<Shortlisted>("http://localhost:8080/Shortlisted/"+id);
  }
  public deleteById(id){
    return this.http.delete("http://localhost:8080/Shortlisted/"+id);
 }
}
