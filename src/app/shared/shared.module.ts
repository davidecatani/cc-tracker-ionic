import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';

const component = [
  AccordionComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports:  [ ...component ],
  declarations: [ ...component ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
