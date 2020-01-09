import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {InteviewLevelService} from './InteviewLevelService';
import { InteviewLevel } from './InteviewLevel';@Component({
  selector: 'app-InteviewLevel',
  templateUrl: './InteviewLevel.html',
})
export class InteviewLevelComponent implements OnInit {
   formGroup:FormGroup;
   elements:InteviewLevel[]; 
 constructor(private InteviewLevelService:InteviewLevelService, ) { }
 ngOnInit() {
 this.formGroup = new FormGroup({"id":new FormControl(), 
"name":new FormControl(), 
})
}
public  save(){ let id = this.formGroup.get('id').value;
 let name = this.formGroup.get('name').value;
let obj:InteviewLevel  = new InteviewLevel();
obj.id = id
obj.name = name
this.InteviewLevelService.save(obj).subscribe( 
(data)=>{ 
 console.log(data); 
 this.clear(); 
 this.getAll(); 
 }, 
(data)=>{ console.log(data)} 
       ); }getAll(){ 
this.InteviewLevelService.getAll().subscribe( 
 (data)=>{ 
  console.log(data);
  this.elements = data;
  }, 
 (data)=>{ console.log(data)} 
     );  } getById(id){ 
 console.log(id); 
 this.InteviewLevelService.getById(id).subscribe( 
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
     let id = this.formGroup.get('id').value;      this.InteviewLevelService.deleteById(id).subscribe(     (data)=>{          console.log(data),         this.clear();          this.getAll();       },       (data)=>{ console.log(data)}      );  } } 
