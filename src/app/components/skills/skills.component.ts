import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skillsets: any[] = [{
    type: 'Backend',
    skills: [{ title: 'C#' },
    { title: '.Net Core API' },
    { title: 'ASP.Net MVC' },
    { title: 'EF Core' },
    { title: 'Dapper' },
    { title: 'Serilog' },
    { title: 'Swagger' },
    { title: 'Azure' },
    { title: 'Multitenant' },
    ]
  },
  {
    type: 'Frontend',
    skills: [
      { title: 'Angular' },
      { title: 'Angular Material' },
      { title: 'Javascript' },
      { title: 'NodeJs' },
      { title: 'Typescript' },
      { title: 'JQuery' },
      { title: 'React' },
      { title: 'Next.Js' },
      { title: 'HTML' },
      { title: 'Bootstrap' },
      { title: 'Css' },
      { title: 'SCSS' },
    ]
  },
  {
    type: 'Database',
    skills: [
      { title: 'MS SQL' },
      { title: 'MySQL' },
      { title: 'Postgress' },
      { title: 'SQLLite' }]
  },
  {
    type: 'Tools',
    skills: [
      { title: 'Git, TFS, SVN' },
      { title: 'Agile' },
      { title: 'Azure DevOps' },
      { title: 'JIRA' }
    ]
  },
  {
    type: 'B2B SaaS Integration',
    skills: [
      { title: 'OAuth2, OpenId Connect' },
      { title: 'Office365 Integration' },
      { title: 'Pipedrive Integration' },
      { title: 'Intercom Integartion' }]
  }

  ]
}
