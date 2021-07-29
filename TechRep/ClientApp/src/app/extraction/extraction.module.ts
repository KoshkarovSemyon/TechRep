import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ExtractionRoutingModule } from './extraction-routing.module';

import { ExtractionComponent } from './pages/extraction/extraction.component';



@NgModule({
  declarations: [ExtractionComponent],
  imports: [
    ExtractionRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExtractionModule { }
