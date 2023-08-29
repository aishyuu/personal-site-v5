import { Component, Input, OnInit } from '@angular/core';
import { project } from '../models/project';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-individual',
  templateUrl: './project-individual.component.html',
  styleUrls: ['./project-individual.component.css']
})
export class ProjectIndividualComponent implements OnInit {
  @Input()
  project !: project

  faGithub = faGithub;
  faLink = faLink;

  constructor() { }

  ngOnInit() {
  }

}
