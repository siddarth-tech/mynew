import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {QualificationService} from './QualificationService';
import { Qualification } from './Qualification';@Component({
  selector: 'app-Qualification',
  templateUrl: './Qualification.html',
})
export class QualificationComponent implements OnInit {
   formGroup:FormGroup;
   elements:Qualification[]; 
 constructor(private QualificationService:QualificationService, ) { }
 ngOnInit() {
 this.formGroup = new FormGroup({"id":new FormControl(), 
"name":new FormControl(), 
})
}
public  save(){ let id = this.formGroup.get('id').value;
 let name = this.formGroup.get('name').value;
let obj:Qualification  = new Qualification();
obj.id = id
obj.name = name
this.QualificationService.save(obj).subscribe( 
(data)=>{ 
 console.log(data); 
 this.clear(); 
 this.getAll(); 
 }, 
(data)=>{ console.log(data)} 
       ); }getAll(){ 
this.QualificationService.getAll().subscribe( 
 (data)=>{ 
  console.log(data);
  this.elements = data;
  }, 
 (data)=>{ console.log(data)} 
     );  } getById(id){ 
 console.log(id); 
 this.QualificationService.getById(id).subscribe( 
  (data)=>{   console.log(data);  this.formGroup.get('id').setValue(data['id']);
  this.formGroup.get('name').setValue(data['name']);
       },
       (data)=>{ 
        console.log(data) 
       } 
     ) 
  } 
 public clear(){ 
 this.formGroup.get('id').setValue(null); 
 this.formGroup.get('name').setValue(null); 
}
 public delete(){ 
     let id = this.formGroup.get('id').value;      this.QualificationService.deleteById(id).subscribe(     (data)=>{          console.log(data),         this.clear();          this.getAll();       },       (data)=>{ console.log(data)}      );  } } 
