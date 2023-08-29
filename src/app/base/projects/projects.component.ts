import { Component, OnInit } from '@angular/core';
import { project } from '../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsList : Array<project>
  constructor() { 
    this.projectsList = [
      {
        name: 'BLOG 📰',
        desc: "This blog is where I write the latest updates on my software development journey. This was made completely with ASP.NET Core 6 with razor pages, a SQL backend managed by Microsoft SQL server, and it's all hosted on Microsoft Azure. Even has an admin login system so I can edit or add or remove articles without having to touch the code. \n(Note: This may take some time to load because I'm using the cheapest Azure plan!)",
        img: 'https://cdn.discordapp.com/attachments/1067726477774295150/1145806908360507452/image.png',
        stack: ['.NET Core 6', 'Razor Pages' ,'Microsoft SQL Server', 'Identity Framework', 'Microsoft Azure'],
        github: '',
        demo: 'https://blog20230808000358.azurewebsites.net/'
      },
      {
        name: 'PROJECT BRISKET 🪀',
        desc: "Website that displays detailed data on fighting game character Bridget. Includes clickable images that let you go through the move frame by frame.",
        img: 'https://cdn.discordapp.com/attachments/1067726477774295150/1145869122018742292/image.png',
        stack: ['React', 'Tailwind CSS', 'JSON'],
        github: 'https://github.com/aishyuu/project-brisket',
        demo: 'https://aishyuu.github.io/project-brisket/'
      }
    ]
  }

  ngOnInit() {
  }

}
