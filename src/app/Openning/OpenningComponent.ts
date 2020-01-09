import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { OpenningService } from './OpenningService';
import { Openning } from './Openning'; import { PositionService } from '../Position/PositionService';
import { Position } from '../Position/Position';
import { QualificationService } from '../Qualification/QualificationService';
import { Qualification } from '../Qualification/Qualification';
import { SkillService } from '../Skill/SkillService';
import { Skill } from '../Skill/Skill';
@Component({
  selector: 'app-Openning',
  templateUrl: './Openning.html',
})
export class OpenningComponent implements OnInit {
  formGroup: FormGroup;
  elements: Openning[];
  Positions: Position[];
  Qualifications: Qualification[];
  Skills: Skill[];
  constructor(private OpenningService: OpenningService, private PositionService: PositionService,
    private QualificationService: QualificationService,
    private SkillService: SkillService,
  ) { }
  ngOnInit() {
    this.formGroup = new FormGroup({
      "id": new FormControl(),
      "position": new FormControl(),
      "noofope": new FormControl(),
      "qual": new FormControl(),
      "skillset": new FormControl(),
      "exp": new FormControl(),
    })
    this.PositionService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.Positions = data;
      },
      (data) => { console.log(data) }
    );
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
    let position = this.formGroup.get('position').value;
    let noofope = this.formGroup.get('noofope').value;
    let qual = this.formGroup.get('qual').value;
    let skillset = this.formGroup.get('skillset').value;
    let exp = this.formGroup.get('exp').value;
    let obj: Openning = new Openning();
    let p:Position   = new Position();
    p.id=position;
    let q:Qualification = new Qualification(); 
    q.id=qual;
    let skills:Skill[] = [];

    for(let s of skillset){
      let skillObj:Skill = new Skill();
      skillObj.id=s;
      skills.push(skillObj);
    }


    obj.id = id
    obj.position =  p
    obj.noofope = noofope
    obj.qual = q
    obj.skillset = skills;
    obj.exp = exp
    this.OpenningService.save(obj).subscribe(
      (data) => {
        console.log(data);
        this.clear();
        this.getAll();
      },
      (data) => { console.log(data) }
    );
  } getAll() {
    this.OpenningService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.elements = data;
      },
      (data) => { console.log(data) }
    );
  } getById(id) {
    console.log(id);
    this.OpenningService.getById(id).subscribe(
      (data) => {
        console.log(data); this.formGroup.get('id').setValue(data['id']);
        this.formGroup.get('position').setValue(data['position']);
        this.formGroup.get('noofope').setValue(data['noofope']);
        this.formGroup.get('qual').setValue(data['qual']);
        this.formGroup.get('skillset').setValue(data['skillset']);
        this.formGroup.get('exp').setValue(data['exp']);
      },
      (data) => {
        console.log(data)
      }
    )
  }
  public clear() {
    this.formGroup.get('id').setValue(null);
    this.formGroup.get('position').setValue(null);
    this.formGroup.get('noofope').setValue(null);
    this.formGroup.get('qual').setValue(null);
    this.formGroup.get('skillset').setValue(null);
    this.formGroup.get('exp').setValue(null);
  }
  public delete() {
    let id = this.formGroup.get('id').value; this.OpenningService.deleteById(id).subscribe((data) => { console.log(data), this.clear(); this.getAll(); }, (data) => { console.log(data) });
  }
} 
