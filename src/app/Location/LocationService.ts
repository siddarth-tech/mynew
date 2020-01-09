import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from './Location';



@Injectable({

  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }

  public save(data:Location){
     return  this.http.post<Location>("http://localhost:8080/Location/save",data);
  } 

  public getAll():Observable<Location[]>{
     return this.http.get<Location[]>("http://localhost:8080/Location/all");
  }

  public getById(id):Observable<Location>{
     return this.http.get<Location>("http://localhost:8080/Location/"+id);
  }
  public deleteById(id){
    return this.http.delete("http://localhost:8080/Location/"+id);
 }
}
