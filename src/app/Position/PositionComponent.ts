import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {PositionService} from './PositionService';
import { Position } from './Position';@Component({
  selector: 'app-Position',
  templateUrl: './Position.html',
})
export class PositionComponent implements OnInit {
   formGroup:FormGroup;
   elements:Position[]; 
 constructor(private PositionService:PositionService, ) { }
 ngOnInit() {
 this.formGroup = new FormGroup({"id":new FormControl(), 
"name":new FormControl(), 
})
}
public  save(){ let id = this.formGroup.get('id').value;
 let name = this.formGroup.get('name').value;
let obj:Position  = new Position();
obj.id = id
obj.name = name
this.PositionService.save(obj).subscribe( 
(data)=>{ 
 console.log(data); 
 this.clear(); 
 this.getAll(); 
 }, 
(data)=>{ console.log(data)} 
       ); }getAll(){ 
this.PositionService.getAll().subscribe( 
 (data)=>{ 
  console.log(data);
  this.elements = data;
  }, 
 (data)=>{ console.log(data)} 
     );  } getById(id){ 
 console.log(id); 
 this.PositionService.getById(id).subscribe( 
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
     let id = this.formGroup.get('id').value;      this.PositionService.deleteById(id).subscribe(     (data)=>{          console.log(data),         this.clear();          this.getAll();       },       (data)=>{ console.log(data)}      );  } } 
