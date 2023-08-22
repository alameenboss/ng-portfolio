import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      "type": "type3",
      "date": "Jun’21 – Jan’23",
      "title": "Senior Software Engineer",
      "description": "Kovai.co, Coimbatore",
      "companyurl":'https://www.kovai.co/'
    },
    {
      "type": "type2",
      "date": "Jun’20 – Mar’21",
      "title": "Senior Software Engineer",
      "description": "Spritle Software Private Limited, Chennai",
      "companyurl":'https://www.spritle.com/'
    },
    {
      "type": "type1",
      "date": "Nov’16 - Jun’20",
      "title": "System Analyst",
      "description": "Hexaware Technologies Limited, Chennai",
      "companyurl":'https://hexaware.com/'
    },
    {
      "type": "type3",
      "date": "Sep’14 - Oct’16",
      "title": "Associate – Projects",
      "description": "Cognizant Technology Solution, Chennai",
      "companyurl":'https://www.cognizant.com/in/en'
    },
    {
      "type": "type2",
      "date": "Jan’13 - Jul’14",
      "title": "Software Engineer",
      "description": "Sterling Software Private Ltd., Chennai",
      "companyurl":'https://sterlingsoftware.global/'
    },
    {
      "type": "type1",
      "date": "Dec’09 - Oct’12",
      "title": "Software Developer",
      "description": "Ortech System, Mettupalayam",
      "companyurl":''
    },
  ];
}