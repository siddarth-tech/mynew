import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {OfferService} from './OfferService';
import { Offer } from './Offer';import {CandidateService} from '../Candidate/CandidateService';
import {Candidate} from '../Candidate/Candidate';
import {PositionService} from '../Position/PositionService';
import {Position} from '../Position/Position';
import {SalaryDetailsService} from '../SalaryDetails/SalaryDetailsService';
import {SalaryDetails} from '../SalaryDetails/SalaryDetails';
@Component({
  selector: 'app-Offer',
  templateUrl: './Offer.html',
})
export class OfferComponent implements OnInit {
   formGroup:FormGroup;
   elements:Offer[]; 
Candidates :Candidate[];
Positions :Position[];
SalaryDetailss :SalaryDetails[];
 constructor(private OfferService:OfferService, private CandidateService:CandidateService ,
private PositionService:PositionService ,
private SalaryDetailsService:SalaryDetailsService ,
) { }
 ngOnInit() {
 this.formGroup = new FormGroup({"id":new FormControl(), 
"candidate":new FormControl(), 
"pos":new FormControl(), 
"sal":new FormControl(), 
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
 this.SalaryDetailsService.getAll().subscribe( 
(data) => { 
 console.log(data);
this.SalaryDetailss = data;
},
(data) => { console.log(data) }
);
}
public  save(){ let id = this.formGroup.get('id').value;
 let candidate = this.formGroup.get('candidate').value;
 let pos = this.formGroup.get('pos').value;
 let sal = this.formGroup.get('sal').value;
let obj:Offer  = new Offer();
obj.id = id
obj.candidate = candidate
obj.pos = pos
obj.sal = sal
this.OfferService.save(obj).subscribe( 
(data)=>{ 
 console.log(data); 
 this.clear(); 
 this.getAll(); 
 }, 
(data)=>{ console.log(data)} 
       ); }getAll(){ 
this.OfferService.getAll().subscribe( 
 (data)=>{ 
  console.log(data);
  this.elements = data;
  }, 
 (data)=>{ console.log(data)} 
     );  } getById(id){ 
 console.log(id); 
 this.OfferService.getById(id).subscribe( 
  (data)=>{   console.log(data);  this.formGroup.get('id').setValue(data['id']);
  this.formGroup.get('candidate').setValue(data['candidate']);
  this.formGroup.get('pos').setValue(data['pos']);
  this.formGroup.get('sal').setValue(data['sal']);
       },
       (data)=>{ 
        console.log(data) 
       } 
     ) 
  } 
 public clear(){ 
 this.formGroup.get('id').setValue(null); 
 this.formGroup.get('candidate').setValue(null); 
 this.formGroup.get('pos').setValue(null); 
 this.formGroup.get('sal').setValue(null); 
}
 public delete(){ 
     let id = this.formGroup.get('id').value;      this.OfferService.deleteById(id).subscribe(     (data)=>{          console.log(data),         this.clear();          this.getAll();       },       (data)=>{ console.log(data)}      );  } } 
