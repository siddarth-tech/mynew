import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from './Skill';



@Injectable({

  providedIn: 'root'
})
export class SkillService {

  constructor(private http:HttpClient) { }

  public save(data:Skill){
     return  this.http.post<Skill>("http://localhost:8080/Skill/save",data);
  } 

  public getAll():Observable<Skill[]>{
     return this.http.get<Skill[]>("http://localhost:8080/Skill/all");
  }

  public getById(id):Observable<Skill>{
     return this.http.get<Skill>("http://localhost:8080/Skill/"+id);
  }
  public deleteById(id){
    return this.http.delete("http://localhost:8080/Skill/"+id);
 }
}
