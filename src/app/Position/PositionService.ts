import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Position } from './Position';



@Injectable({

  providedIn: 'root'
})
export class PositionService {

  constructor(private http:HttpClient) { }

  public save(data:Position){
     return  this.http.post<Position>("http://localhost:8080/Position/save",data);
  } 

  public getAll():Observable<Position[]>{
     return this.http.get<Position[]>("http://localhost:8080/Position/all");
  }

  public getById(id):Observable<Position>{
     return this.http.get<Position>("http://localhost:8080/Position/"+id);
  }
  public deleteById(id){
    return this.http.delete("http://localhost:8080/Position/"+id);
 }
}
