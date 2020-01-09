import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {JoiningService} from './JoiningService';
import { Joining } from './Joining';import {CandidateService} from '../Candidate/CandidateService';
import {Candidate} from '../Candidate/Candidate';
import {LocationService} from '../Location/LocationService';
import {Location} from '../Location/Location';
@Component({
  selector: 'app-Joining',
  templateUrl: './Joining.html',
})
export class JoiningComponent implements OnInit {
   formGroup:FormGroup;
   elements:Joining[]; 
Candidates :Candidate[];
Locations :Location[];
 constructor(private JoiningService:JoiningService, private CandidateService:CandidateService ,
private LocationService:LocationService ,
) { }
 ngOnInit() {
 this.formGroup = new FormGroup({"id":new FormControl(), 
"candidate":new FormControl(), 
"location":new FormControl(), 
"time":new FormControl(), 
"empid":new FormControl(), 
})
 this.CandidateService.getAll().subscribe( 
(data) => { 
 console.log(data);
this.Candidates = data;
},
(data) => { console.log(data) }
);
 this.LocationService.getAll().subscribe( 
(data) => { 
 console.log(data);
this.Locations = data;
},
(data) => { console.log(data) }
);
}
public  save(){ let id = this.formGroup.get('id').value;
 let candidate = this.formGroup.get('candidate').value;
 let location = this.formGroup.get('location').value;
 let time = this.formGroup.get('time').value;
 let empid = this.formGroup.get('empid').value;
let obj:Joining  = new Joining();
obj.id = id
obj.candidate = candidate
obj.location = location
obj.time = time
obj.empid = empid
this.JoiningService.save(obj).subscribe( 
(data)=>{ 
 console.log(data); 
 this.clear(); 
 this.getAll(); 
 }, 
(data)=>{ console.log(data)} 
       ); }getAll(){ 
this.JoiningService.getAll().subscribe( 
 (data)=>{ 
  console.log(data);
  this.elements = data;
  }, 
 (data)=>{ console.log(data)} 
     );  } getById(id){ 
 console.log(id); 
 this.JoiningService.getById(id).subscribe( 
  (data)=>{   console.log(data);  this.formGroup.get('id').setValue(data['id']);
  this.formGroup.get('candidate').setValue(data['candidate']);
  this.formGroup.get('location').setValue(data['location']);
  this.formGroup.get('time').setValue(data['time']);
  this.formGroup.get('empid').setValue(data['empid']);
       },
       (data)=>{ 
        console.log(data) 
       } 
     ) 
  } 
 public clear(){ 
 this.formGroup.get('id').setValue(null); 
 this.formGroup.get('candidate').setValue(null); 
 this.formGroup.get('location').setValue(null); 
 this.formGroup.get('time').setValue(null); 
 this.formGroup.get('empid').setValue(null); 
}
 public delete(){ 
     let id = this.formGroup.get('id').value;      this.JoiningService.deleteById(id).subscribe(     (data)=>{          console.log(data),         this.clear();          this.getAll();       },       (data)=>{ console.log(data)}      );  } } 
