import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterviewInvitation } from './InterviewInvitation';



@Injectable({

  providedIn: 'root'
})
export class InterviewInvitationService {

  constructor(private http:HttpClient) { }

  public save(data:InterviewInvitation){
     return  this.http.post<InterviewInvitation>("http://localhost:8080/InterviewInvitation/save",data);
  } 

  public getAll():Observable<InterviewInvitation[]>{
     return this.http.get<InterviewInvitation[]>("http://localhost:8080/InterviewInvitation/all");
  }

  public getById(id):Observable<InterviewInvitation>{
     return this.http.get<InterviewInvitation>("http://localhost:8080/InterviewInvitation/"+id);
  }
  public deleteById(id){
    return this.http.delete("http://localhost:8080/InterviewInvitation/"+id);
 }
}
