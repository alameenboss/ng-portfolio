import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  marjorProjects = [{
    projectName: 'Churn360',
    company:'Kovai.co',
    role: "Senior Developer",
    link: 'https://www.churn360.com',
    duration: "1.5 Years",
    teamsize: "30 Members",
    description: "A modular, molith, multitenant, cloud native, B2B SaaS application.This application is a customer success paltform integrating data from various platfrom like pipedrive, intercom,office365,gmail,google calander,hubspot.The web apllication uses various azure services like Function,Servicebus queue , topics, storage blob. The front end is in Angular and uses Web API and MSSQL for backend",
    technologyused: ["C#", ".Net Core Web API", "Auto Mapper","Elastic Search", "EF Core","Dapper","Swagger","Angular", "Bootstrap", "MS SQL", "Git", "Agile"],
    clientdetails: "B2B SaaS companies / Customer Success Managers",
    roledescription: "I was part of the Agile Engineering Team, mentoring the interns and junior developer. Developed modules like plays,customer journey, pipedrive integration, office 365 integration, intercom integration, customer hirarchy, global search using elastic search, search module using Seive expresion builder, server side pagination and filtering. I was also part of devops planing and release mangement. I was part of the deployment team worked on setting up the dev, qa , pre production and prodution environment and delevering many successful production releases",
    accomplishment: ""
  },
  {
    projectName: 'RxPlan',
    company:'Hexaware',
    role: "Senior Developer",
    link: "",
    duration: "2.5 Years",
    teamsize: "Agile Team of 12+ members",
    description: "This application is central repository of collected data of their clients. The data collection process would take about 6 to 1 year which include various configuration and setup details.The client would have multiple sub system and sub organization which is to be seamlessly integrated to the application.The data would be validated and iterated through an online portal and would have several versions",
    technologyused: ["C#", "ASP.Net MVC", "ASP.Net MVC WebApi", "Auto Mapper", "JQuery", "Bootstrap", "MS SQL", "TFS", "Fluent Validation", "Dapper", "NUnit", "Selenium", "Agile"],
    clientdetails: "Leading PBM Client in USA",
    roledescription: "Acted as part of agile team & engaged in developing, unit testing and delivering the  committed stories.Supporting the pre and post production bugs.Documenting and refactoring the codes based on the code review comments",
    accomplishment: ""
  },
  {
    projectName: 'Automation Testing Framework',
    company:'Hexaware',
    role: "Senior Developer",
    link: '',
    duration: "3months",
    teamsize: "2 members",
    description: "This application is used by the client to QA Team. The application is based out of action keyword predefined.Test suite, Test case, Test data for various iteration and browser configuration would be spread across various excel sheets.Based on the configuration details, the system will Test other application using selenium drivers.Also after the completion would send an automatic report to concerned stakeholders email",
    technologyused: ["C#", "NUnit", "Selenium", "TFS", "MS Excel", "Extent Reports"],
    clientdetails: "Leading PBM Client in USA",
    roledescription: "I’m the core developer of this project and there was a tester would will write test cases and use this application to perform automation.My primary responsibility is to convert the selenium workflow in to a workflow that any QA would do it manually",
    accomplishment: "This application was used to automate testing of all the web application newly developed by the client.It was nominated for best clients value add.This application was used by all the QA team members since no coding skills is required for them to use this application"
  },
  {
    projectName: 'Reporting Layer Automation',
    company:'Hexaware',
    role: "Senior Developer",
    link: '',
    duration: "2 Month",
    teamsize: "3+ members",
    description: "This is short term POC project, objective of this project is to automate the migration process from MSTR Reports to Tableau Reports using the extracted metadata",
    technologyused: ["C# (Win Forms)", "XML", "MS-Access", "Tableau", "Git"],
    clientdetails: "",
    roledescription: "Developed the application from scratch, which includes connecting to the database, executing queries, reading the metadata stored in the database and covert to XML format required for generating the Tableau reports",
    accomplishment: "In a short duration I have learned the Tableau software fundaments, designing the medium complex report, reverse engineered the XML structure of the tableau reports and regenerated the same using the developed C# application"
  },
  {
    projectName: 'Ehsip',
    company:'Hexaware',
    role: "Senior Developer",
    link: '',
    duration: "7 Month",
    teamsize: "8+ members",
    description: "This application is end to end safety product, custom built to fulfil their requirements. The system allows to report, track and process the safety incident across their multiple project sites",
    technologyused: ["C#", "ASP.Net MVC", "ASP.Net MVC WebApi", "JQuery", "Bootstrap", "MS SQL", "Azure DevOps", "Git", "Agile"],
    clientdetails: "Established manufacturing company in Malaysia",
    roledescription: "I was part of a agile team targeting full sprint goal over ongoing enhancement to the application. I was actively participating in the requirement gathering, goal setting for the team. Helping team member with fixing their bug, coordinating with testers to compete and close the stories in the same sprint. Also I was part of the code review panel for reviewing & merging the committed git codes",
    accomplishment: "Most of the developer in my team was less experienced resources. I helped them in each sprint to gradually achieve the goal in a short duration, also team was highly productive and delivering what was committed"
  },
  {
    projectName: 'Audit Central',
    company:'Cognizant',
    role: "Senior Developer",
    link: '',
    duration: "2Years",
    teamsize: "6 members",
    description: "This application is Audit and review tool to assess the performance of the Claim Handler. This is a support and enhancement project. Since it is a maintenance project, it involves various teams for support activity",
    technologyused: ["ASP.Net MVC", "C#", "JQuery", " Bootstrap", "MS SQL"],
    clientdetails: "Client is a very large Insurance Company based on Hartford, Connecticut, US",
    roledescription: "Developing the user requirement and maintaining of the existing application. Working on high and critical requirement to give more business values. Participating in requirement gathering and coordinating with other teams to complete the work",
    accomplishment: ""
  },
  {
    projectName: 'Vendor Self Audit',
    company:'Cognizant',
    role: "Senior Developer",
    link: '',
    duration: "2Years",
    teamsize: "6 members",
    description: "This application is Audit and review tool for the third party vendors. This is an external facing application, hence involves lot of security precaution. This is a support and enhancement project. Since it is a maintenance project, it involves various teams for support activity",
    technologyused: ["ASP.Net MVC", "C#", "JQuery", " Bootstrap", "MS SQL"],
    clientdetails: "Client is a very large Insurance Company based on Hartford, Connecticut, US",
    roledescription: "Developing the user requirement and maintaining of the existing application. Working on high and critical requirement to give more business values. Participating in requirement gathering and coordinating with other teams to complete the work",
    accomplishment: ""
  }]
}