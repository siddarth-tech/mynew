import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './Application/ApplicationComponent';
import { CandidateComponent } from './Candidate/CandidateComponent';
import { InterviewInvitationComponent } from './InterviewInvitation/InterviewInvitationComponent';
import { InteviewLevelComponent } from './InteviewLevel/InteviewLevelComponent';
import { JoiningComponent } from './Joining/JoiningComponent';
import { LocationComponent } from './Location/LocationComponent';
import { OfferComponent } from './Offer/OfferComponent';
import { OpenningComponent } from './Openning/OpenningComponent';
import { PositionComponent } from './Position/PositionComponent';
import { QualificationComponent } from './Qualification/QualificationComponent';
import { SalaryDetailsComponent } from './SalaryDetails/SalaryDetailsComponent';
import { Shortlisted } from './Shortlisted/Shortlisted';
import { ShortlistedComponent } from './Shortlisted/ShortlistedComponent';
import { SkillComponent } from './Skill/SkillComponent';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    CandidateComponent,
    InterviewInvitationComponent,
    InteviewLevelComponent,
    JoiningComponent,
    LocationComponent,
    OfferComponent,
    OpenningComponent,
    PositionComponent,
    QualificationComponent,
    SalaryDetailsComponent,
    ShortlistedComponent,
    SkillComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
