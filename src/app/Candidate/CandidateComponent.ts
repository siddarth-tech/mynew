import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { CandidateService } from './CandidateService';
import { Candidate } from './Candidate'; import { QualificationService } from '../Qualification/QualificationService';
import { Qualification } from '../Qualification/Qualification';
import { SkillService } from '../Skill/SkillService';
import { Skill } from '../Skill/Skill';
import { QualificationComponent } from '../Qualification/QualificationComponent';
@Component({
  selector: 'app-Candidate',
  templateUrl: './Candidate.html',
})
export class CandidateComponent implements OnInit {
  formGroup: FormGroup;
  elements: Candidate[];
  Qualifications: Qualification[];
  Skills: Skill[];
  constructor(private CandidateService: CandidateService, private QualificationService: QualificationService,
    private SkillService: SkillService,
  ) { }
  ngOnInit() {
    this.formGroup = new FormGroup({
      "id": new FormControl(),
      "name": new FormControl(),
      "qual": new FormControl(),
      "exp": new FormControl(),
      "skillset": new FormControl(),
      "email": new FormControl(),
      "phone": new FormControl(),
    })
    this.QualificationService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.Qualifications = data;
      },
      (data) => { console.log(data) }
    );
    this.SkillService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.Skills = data;
      },
      (data) => { console.log(data) }
    );
  }
  public save() {
    let id = this.formGroup.get('id').value;
    let name = this.formGroup.get('name').value;
    let qual = this.formGroup.get('qual').value;
    console.log("qual::"+qual);
    let exp = this.formGroup.get('exp').value;
    let skillset = this.formGroup.get('skillset').value;
    console.log("skillset::"+skillset);
    let email = this.formGroup.get('email').value;
    let phone = this.formGroup.get('phone').value;
    let obj: Candidate = new Candidate();
    let qualification : Qualification = new Qualification();
    let selSkills:Skill[] = [];
    
    for(let a of skillset){
      console.log("skill:"+a);
      let skill:Skill = new Skill();
      skill.id =a;
      selSkills.push(skill);
    }

   

    qualification.id=qual;
    obj.id = id
    obj.name = name
    obj.qual = qualification;
    obj.exp = exp
    obj.skillset = selSkills;
    obj.email = email
    obj.phone = phone
    this.CandidateService.save(obj).subscribe(
      (data) => {
        console.log(data);
        this.clear();
        this.getAll();
      },
      (data) => { console.log(data) }
    );
  } getAll() {
    this.CandidateService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.elements = data;
      },
      (data) => { console.log(data) }
    );
  } getById(id) {
    console.log(id);
    this.CandidateService.getById(id).subscribe(
      (data) => {
        console.log(data); this.formGroup.get('id').setValue(data['id']);
        this.formGroup.get('name').setValue(data['name']);
        this.formGroup.get('qual').setValue(data['qual']);
        this.formGroup.get('exp').setValue(data['exp']);
        this.formGroup.get('skillset').setValue(data['skillset']);
        this.formGroup.get('email').setValue(data['email']);
        this.formGroup.get('phone').setValue(data['phone']);
      },
      (data) => {
        console.log(data)
      }
    )
  }
  public clear() {
    this.formGroup.get('id').setValue(null);
    this.formGroup.get('name').setValue(null);
    this.formGroup.get('qual').setValue(null);
    this.formGroup.get('exp').setValue(null);
    this.formGroup.get('skillset').setValue(null);
    this.formGroup.get('email').setValue(null);
    this.formGroup.get('phone').setValue(null);
  }
  public delete() {
    let id = this.formGroup.get('id').value; this.CandidateService.deleteById(id).subscribe((data) => { console.log(data), this.clear(); this.getAll(); }, (data) => { console.log(data) });
  }
} 
