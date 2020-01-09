import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InteviewLevel } from './InteviewLevel';



@Injectable({

  providedIn: 'root'
})
export class InteviewLevelService {

  constructor(private http:HttpClient) { }

  public save(data:InteviewLevel){
     return  this.http.post<InteviewLevel>("http://localhost:8080/InteviewLevel/save",data);
  } 

  public getAll():Observable<InteviewLevel[]>{
     return this.http.get<InteviewLevel[]>("http://localhost:8080/InteviewLevel/all");
  }

  public getById(id):Observable<InteviewLevel>{
     return this.http.get<InteviewLevel>("http://localhost:8080/InteviewLevel/"+id);
  }
  public deleteById(id){
    return this.http.delete("http://localhost:8080/InteviewLevel/"+id);
 }
}
