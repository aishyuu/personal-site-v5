import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { IntroComponent } from './intro/intro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    BaseComponent
  ],
  declarations: [BaseComponent, IntroComponent]
})
export class BaseModule { }
