import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './Application/ApplicationComponent';
import { CandidateComponent } from './Candidate/CandidateComponent';
import { SkillComponent } from './Skill/SkillComponent';
import { OpenningComponent } from './Openning/OpenningComponent';
import { PositionComponent } from './Position/PositionComponent';


const routes: Routes = [
  {path:"Application" ,component:ApplicationComponent},
  {path:"Candidate" ,component:CandidateComponent},
  {path:"Skill" ,component:SkillComponent},
  {path:"Openning" ,component:OpenningComponent},
  {path:"Position" ,component:PositionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
