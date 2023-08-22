import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { AboutMeComponent } from './app/components/about-me/about-me.component';
import { ContactMeComponent } from './app/components/contact-me/contact-me.component';
import { SkillsComponent } from './app/components/skills/skills.component';
import { EducationComponent } from './app/components/education/education.component';
import { ExperienceComponent } from './app/components/experience/experience.component';
import { ProjectsComponent } from './app/components/projects/projects.component';
import { OpensourceComponent } from './app/components/opensource/opensource.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'opensource', component: OpensourceComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact-me', component: ContactMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
