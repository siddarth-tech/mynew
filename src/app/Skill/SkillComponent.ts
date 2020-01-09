import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {SkillService} from './SkillService';
import { Skill } from './Skill';@Component({
  selector: 'app-Skill',
  templateUrl: './Skill.html',
})
export class SkillComponent implements OnInit {
   formGroup:FormGroup;
   elements:Skill[]; 
 constructor(private SkillService:SkillService, ) { }
 ngOnInit() {
 this.formGroup = new FormGroup({"id":new FormControl(), 
"name":new FormControl(), 
})
}
public  save(){ let id = this.formGroup.get('id').value;
 let name = this.formGroup.get('name').value;
let obj:Skill  = new Skill();
obj.id = id
obj.name = name
this.SkillService.save(obj).subscribe( 
(data)=>{ 
 console.log(data); 
 this.clear(); 
 this.getAll(); 
 }, 
(data)=>{ console.log(data)} 
       ); }getAll(){ 
this.SkillService.getAll().subscribe( 
 (data)=>{ 
  console.log(data);
  this.elements = data;
  }, 
 (data)=>{ console.log(data)} 
     );  } getById(id){ 
 console.log(id); 
 this.SkillService.getById(id).subscribe( 
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
     let id = this.formGroup.get('id').value;      this.SkillService.deleteById(id).subscribe(     (data)=>{          console.log(data),         this.clear();          this.getAll();       },       (data)=>{ console.log(data)}      );  } } 
