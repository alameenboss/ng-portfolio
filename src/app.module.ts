import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app/components/app/app.component';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { SkillsComponent } from './app/components/skills/skills.component';
import { ExperienceComponent } from './app/components/experience/experience.component';
import { ProjectsComponent } from './app/components/projects/projects.component';
import { ContactMeComponent } from './app/components/contact-me/contact-me.component';
import { AboutMeComponent } from './app/components/about-me/about-me.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EducationComponent } from './app/components/education/education.component';
import { OpensourceComponent } from './app/components/opensource/opensource.component';


const materialModule = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatProgressBarModule
]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactMeComponent,
    AboutMeComponent,
    EducationComponent,
    OpensourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
