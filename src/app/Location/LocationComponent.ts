import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {LocationService} from './LocationService';
import { Location } from './Location';@Component({
  selector: 'app-Location',
  templateUrl: './Location.html',
})
export class LocationComponent implements OnInit {
   formGroup:FormGroup;
   elements:Location[]; 
 constructor(private LocationService:LocationService, ) { }
 ngOnInit() {
 this.formGroup = new FormGroup({"id":new FormControl(), 
"name":new FormControl(), 
})
}
public  save(){ let id = this.formGroup.get('id').value;
 let name = this.formGroup.get('name').value;
let obj:Location  = new Location();
obj.id = id
obj.name = name
this.LocationService.save(obj).subscribe( 
(data)=>{ 
 console.log(data); 
 this.clear(); 
 this.getAll(); 
 }, 
(data)=>{ console.log(data)} 
       ); }getAll(){ 
this.LocationService.getAll().subscribe( 
 (data)=>{ 
  console.log(data);
  this.elements = data;
  }, 
 (data)=>{ console.log(data)} 
     );  } getById(id){ 
 console.log(id); 
 this.LocationService.getById(id).subscribe( 
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
     let id = this.formGroup.get('id').value;      this.LocationService.deleteById(id).subscribe(     (data)=>{          console.log(data),         this.clear();          this.getAll();       },       (data)=>{ console.log(data)}      );  } } 
