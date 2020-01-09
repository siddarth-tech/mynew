import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from './Offer';



@Injectable({

  providedIn: 'root'
})
export class OfferService {

  constructor(private http:HttpClient) { }

  public save(data:Offer){
     return  this.http.post<Offer>("http://localhost:8080/Offer/save",data);
  } 

  public getAll():Observable<Offer[]>{
     return this.http.get<Offer[]>("http://localhost:8080/Offer/all");
  }

  public getById(id):Observable<Offer>{
     return this.http.get<Offer>("http://localhost:8080/Offer/"+id);
  }
  public deleteById(id){
    return this.http.delete("http://localhost:8080/Offer/"+id);
 }
}
