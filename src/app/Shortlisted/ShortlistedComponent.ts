import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {ShortlistedService} from './ShortlistedService';
import { Shortlisted } from './Shortlisted';import {CandidateService} from '../Candidate/CandidateService';
import {Candidate} from '../Candidate/Candidate';
import {PositionService} from '../Position/PositionService';
import {Position} from '../Position/Position';
@Component({
  selector: 'app-Shortlisted',
  templateUrl: './Shortlisted.html',
})
export class ShortlistedComponent implements OnInit {
   formGroup:FormGroup;
   elements:Shortlisted[]; 
Candidates :Candidate[];
Positions :Position[];
 constructor(private ShortlistedService:ShortlistedService, private CandidateService:CandidateService ,
private PositionService:PositionService ,
) { }
 ngOnInit() {
 this.formGroup = new FormGroup({"id":new FormControl(), 
"candidate":new FormControl(), 
"propos":new FormControl(), 
"prosal":new FormControl(), 
"expsal":new FormControl(), 
})
 this.CandidateService.getAll().subscribe( 
(data) => { 
 console.log(data);
this.Candidates = data;
},
(data) => { console.log(data) }
);
 this.PositionService.getAll().subscribe( 
(data) => { 
 console.log(data);
this.Positions = data;
},
(data) => { console.log(data) }
);
}
public  save(){ let id = this.formGroup.get('id').value;
 let candidate = this.formGroup.get('candidate').value;
 let propos = this.formGroup.get('propos').value;
 let prosal = this.formGroup.get('prosal').value;
 let expsal = this.formGroup.get('expsal').value;
let obj:Shortlisted  = new Shortlisted();
obj.id = id
obj.candidate = candidate
obj.propos = propos
obj.prosal = prosal
obj.expsal = expsal
this.ShortlistedService.save(obj).subscribe( 
(data)=>{ 
 console.log(data); 
 this.clear(); 
 this.getAll(); 
 }, 
(data)=>{ console.log(data)} 
       ); }getAll(){ 
this.ShortlistedService.getAll().subscribe( 
 (data)=>{ 
  console.log(data);
  this.elements = data;
  }, 
 (data)=>{ console.log(data)} 
     );  } getById(id){ 
 console.log(id); 
 this.ShortlistedService.getById(id).subscribe( 
  (data)=>{   console.log(data);  this.formGroup.get('id').setValue(data['id']);
  this.formGroup.get('candidate').setValue(data['candidate']);
  this.formGroup.get('propos').setValue(data['propos']);
  this.formGroup.get('prosal').setValue(data['prosal']);
  this.formGroup.get('expsal').setValue(data['expsal']);
       },
       (data)=>{ 
        console.log(data) 
       } 
     ) 
  } 
 public clear(){ 
 this.formGroup.get('id').setValue(null); 
 this.formGroup.get('candidate').setValue(null); 
 this.formGroup.get('propos').setValue(null); 
 this.formGroup.get('prosal').setValue(null); 
 this.formGroup.get('expsal').setValue(null); 
}
 public delete(){ 
     let id = this.formGroup.get('id').value;      this.ShortlistedService.deleteById(id).subscribe(     (data)=>{          console.log(data),         this.clear();          this.getAll();       },       (data)=>{ console.log(data)}      );  } } 
