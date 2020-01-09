import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ApplicationService } from './ApplicationService';
import { Application } from './Application'; import { CandidateService } from '../Candidate/CandidateService';
import { Candidate } from '../Candidate/Candidate';
import { OpenningService } from '../Openning/OpenningService';
import { Openning } from '../Openning/Openning';
@Component({
  selector: 'app-Application',
  templateUrl: './Application.html',
})
export class ApplicationComponent implements OnInit {
  formGroup: FormGroup;
  elements: Application[];
  Candidates: Candidate[];
  Opennings: Openning[];
  constructor(private ApplicationService: ApplicationService, private CandidateService: CandidateService,
    private OpenningService: OpenningService,
  ) { }
  ngOnInit() {
    this.formGroup = new FormGroup({
      "id": new FormControl(),
      "candidate": new FormControl(),
      "openning": new FormControl(),
      "time": new FormControl(),
    })
    this.CandidateService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.Candidates = data;
      },
      (data) => { console.log(data) }
    );
    this.OpenningService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.Opennings = data;
      },
      (data) => { console.log(data) }
    );
  }
  public save() {
    let id = this.formGroup.get('id').value;
    let candidate = this.formGroup.get('candidate').value;
    let openning = this.formGroup.get('openning').value;
    let time = this.formGroup.get('time').value;
    let obj: Application = new Application();
    obj.id = id
    obj.candidate = candidate
    obj.openning = openning
    obj.time = time
    this.ApplicationService.save(obj).subscribe(
      (data) => {
        console.log(data);
        this.clear();
        this.getAll();
      },
      (data) => { console.log(data) }
    );
  } getAll() {
    this.ApplicationService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.elements = data;
      },
      (data) => { console.log(data) }
    );
  } getById(id) {
    console.log(id);
    this.ApplicationService.getById(id).subscribe(
      (data) => {
        console.log(data); this.formGroup.get('id').setValue(data['id']);
        this.formGroup.get('candidate').setValue(data['candidate']);
        this.formGroup.get('openning').setValue(data['openning']);
        this.formGroup.get('time').setValue(data['time']);
      },
      (data) => {
        console.log(data)
      }
    )
  }
  public clear() {
    this.formGroup.get('id').setValue(null);
    this.formGroup.get('candidate').setValue(null);
    this.formGroup.get('openning').setValue(null);
    this.formGroup.get('time').setValue(null);
  }
  public delete() {
    let id = this.formGroup.get('id').value; this.ApplicationService.deleteById(id).subscribe((data) => { console.log(data), this.clear(); this.getAll(); }, (data) => { console.log(data) });
  }
} 
