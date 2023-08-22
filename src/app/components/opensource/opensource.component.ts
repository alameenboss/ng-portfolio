import { Component } from '@angular/core';

@Component({
  selector: 'app-opensource',
  templateUrl: './opensource.component.html',
  styleUrls: ['./opensource.component.scss']
})
export class OpensourceComponent {

  projects = [
    {
      title: 'Angular Portfolio',
      description:'This is an angular application showcasing the portfolio',
      sourcecode: 'https://github.com/alameenboss/ng-portfolio',
      techused:["Angular","Angular material design","typescript"],
      features:["Sidenav","angular routing","timeline"],
      demourl:'https://alameens-cv.netlify.app/',
    },
    {
      title: 'Next Car Hub',
      description:'This is a next.js based application, showcasing the car models with filtering, sorting.view car details',
      sourcecode: 'https://github.com/alameenboss/next-car-hub',
      techused:["NextJs","Tailwind css","headlessui","react","typescript"],
      features:["Landing Page","Car list view","Filtering","Sorting","Card detail view"],
      demourl:'',
    },
    {
      title: 'Call history App',
      description:'This app is used for viewing the call history in a nice calender view',
      sourcecode: 'https://github.com/alameenboss/call-history-app',
      techused:["Angular","Bootstrap","Ng-Bootstrap","ng-calender","csv-parser",],
      features:["Parse csv file in specified format","filter contacts","select / unselect contacts","view call history in month/week/day view","view call history as calender view/list view/table view","option to set default contacts"],
      demourl:'https://show-events.netlify.app/',
    },
    {
      title: 'Google Docs Clone',
      description:'Yet another clone of Google docs with Angular frontend and .NetCore backend.',
      sourcecode: 'https://github.com/alameenboss/google-docs-clone',
      techused:["Angular","quill.js",".net web api","jwt authentication","efocre","mssql"],
      features:['List all documents in card view',"auto save","open api documentation with swagger"],
      demourl:'https://docs-google-clone.netlify.app',
    },
    {
      title: 'Easy password remover',
      description:'This is a .net winforms utility to remove the password from the pdf file.',
      sourcecode: 'https://github.com/alameenboss/easy-password-remover',
      techused:["Winforms"],
      features:["Remove password from pdf file"],
      demourl:'',
    }
  ]
}
