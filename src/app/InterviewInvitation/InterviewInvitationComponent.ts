import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {InterviewInvitationService} from './InterviewInvitationService';
import { InterviewInvitation } from './InterviewInvitation';import {CandidateService} from '../Candidate/CandidateService';
import {Candidate} from '../Candidate/Candidate';
import {LocationService} from '../Location/LocationService';
import {Location} from '../Location/Location';
import {InteviewLevelService} from '../InteviewLevel/InteviewLevelService';
import {InteviewLevel} from '../InteviewLevel/InteviewLevel';
@Component({
  selector: 'app-InterviewInvitation',
  templateUrl: './InterviewInvitation.html',
})
export class InterviewInvitationComponent implements OnInit {
   formGroup:FormGroup;
   elements:InterviewInvitation[]; 
Candidates :Candidate[];
Locations :Location[];
InteviewLevels :InteviewLevel[];
 constructor(private InterviewInvitationService:InterviewInvitationService, private CandidateService:CandidateService ,
private LocationService:LocationService ,
private InteviewLevelService:InteviewLevelService ,
) { }
 ngOnInit() {
 this.formGroup = new FormGroup({"id":new FormControl(), 
"candidate":new FormControl(), 
"location":new FormControl(), 
"time":new FormControl(), 
"level":new FormControl(), 
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
 this.InteviewLevelService.getAll().subscribe( 
(data) => { 
 console.log(data);
this.InteviewLevels = data;
},
(data) => { console.log(data) }
);
}
public  save(){ let id = this.formGroup.get('id').value;
 let candidate = this.formGroup.get('candidate').value;
 let location = this.formGroup.get('location').value;
 let time = this.formGroup.get('time').value;
 let level = this.formGroup.get('level').value;
let obj:InterviewInvitation  = new InterviewInvitation();
obj.id = id
obj.candidate = candidate
obj.location = location
obj.time = time
obj.level = level
this.InterviewInvitationService.save(obj).subscribe( 
(data)=>{ 
 console.log(data); 
 this.clear(); 
 this.getAll(); 
 }, 
(data)=>{ console.log(data)} 
       ); }getAll(){ 
this.InterviewInvitationService.getAll().subscribe( 
 (data)=>{ 
  console.log(data);
  this.elements = data;
  }, 
 (data)=>{ console.log(data)} 
     );  } getById(id){ 
 console.log(id); 
 this.InterviewInvitationService.getById(id).subscribe( 
  (data)=>{   console.log(data);  this.formGroup.get('id').setValue(data['id']);
  this.formGroup.get('candidate').setValue(data['candidate']);
  this.formGroup.get('location').setValue(data['location']);
  this.formGroup.get('time').setValue(data['time']);
  this.formGroup.get('level').setValue(data['level']);
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
 this.formGroup.get('level').setValue(null); 
}
 public delete(){ 
     let id = this.formGroup.get('id').value;      this.InterviewInvitationService.deleteById(id).subscribe(     (data)=>{          console.log(data),         this.clear();          this.getAll();       },       (data)=>{ console.log(data)}      );  } } 
