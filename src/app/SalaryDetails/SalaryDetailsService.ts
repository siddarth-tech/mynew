import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalaryDetails } from './SalaryDetails';



@Injectable({

  providedIn: 'root'
})
export class SalaryDetailsService {

  constructor(private http:HttpClient) { }

  public save(data:SalaryDetails){
     return  this.http.post<SalaryDetails>("http://localhost:8080/SalaryDetails/save",data);
  } 

  public getAll():Observable<SalaryDetails[]>{
     return this.http.get<SalaryDetails[]>("http://localhost:8080/SalaryDetails/all");
  }

  public getById(id):Observable<SalaryDetails>{
     return this.http.get<SalaryDetails>("http://localhost:8080/SalaryDetails/"+id);
  }
  public deleteById(id){
    return this.http.delete("http://localhost:8080/SalaryDetails/"+id);
 }
}
