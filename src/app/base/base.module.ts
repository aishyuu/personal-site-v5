import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BaseComponent
  ],
  declarations: [BaseComponent, IntroComponent]
})
export class BaseModule { }
