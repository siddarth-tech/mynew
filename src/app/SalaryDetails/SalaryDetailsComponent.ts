import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {SalaryDetailsService} from './SalaryDetailsService';
import { SalaryDetails } from './SalaryDetails';@Component({
  selector: 'app-SalaryDetails',
  templateUrl: './SalaryDetails.html',
})
export class SalaryDetailsComponent implements OnInit {
   formGroup:FormGroup;
   elements:SalaryDetails[]; 
 constructor(private SalaryDetailsService:SalaryDetailsService, ) { }
 ngOnInit() {
 this.formGroup = new FormGroup({"id":new FormControl(), 
"basic":new FormControl(), 
"hra":new FormControl(), 
})
}
public  save(){ let id = this.formGroup.get('id').value;
 let basic = this.formGroup.get('basic').value;
 let hra = this.formGroup.get('hra').value;
let obj:SalaryDetails  = new SalaryDetails();
obj.id = id
obj.basic = basic
obj.hra = hra
this.SalaryDetailsService.save(obj).subscribe( 
(data)=>{ 
 console.log(data); 
 this.clear(); 
 this.getAll(); 
 }, 
(data)=>{ console.log(data)} 
       ); }getAll(){ 
this.SalaryDetailsService.getAll().subscribe( 
 (data)=>{ 
  console.log(data);
  this.elements = data;
  }, 
 (data)=>{ console.log(data)} 
     );  } getById(id){ 
 console.log(id); 
 this.SalaryDetailsService.getById(id).subscribe( 
  (data)=>{   console.log(data);  this.formGroup.get('id').setValue(data['id']);
  this.formGroup.get('basic').setValue(data['basic']);
  this.formGroup.get('hra').setValue(data['hra']);
       },
       (data)=>{ 
        console.log(data) 
       } 
     ) 
  } 
 public clear(){ 
 this.formGroup.get('id').setValue(null); 
 this.formGroup.get('basic').setValue(null); 
 this.formGroup.get('hra').setValue(null); 
}
 public delete(){ 
     let id = this.formGroup.get('id').value;      this.SalaryDetailsService.deleteById(id).subscribe(     (data)=>{          console.log(data),         this.clear();          this.getAll();       },       (data)=>{ console.log(data)}      );  } } 
