import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { IntroComponent } from './intro/intro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectIndividualComponent } from './project-individual/project-individual.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    BaseComponent
  ],
  declarations: [BaseComponent, IntroComponent, AboutComponent, ProjectsComponent, ProjectIndividualComponent]
})
export class BaseModule { }
