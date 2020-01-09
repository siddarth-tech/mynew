import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from './Candidate';



@Injectable({

  providedIn: 'root'
})
export class CandidateService {

  constructor(private http:HttpClient) { }

  public save(data:Candidate){
     return  this.http.post<Candidate>("http://localhost:8080/Candidate/save",data);
  } 

  public getAll():Observable<Candidate[]>{
     return this.http.get<Candidate[]>("http://localhost:8080/Candidate/all");
  }

  public getById(id):Observable<Candidate>{
     return this.http.get<Candidate>("http://localhost:8080/Candidate/"+id);
  }
  public deleteById(id){
    return this.http.delete("http://localhost:8080/Candidate/"+id);
 }
}
