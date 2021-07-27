import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SourcesRoutingModule } from './sources-routing.module';
import { SourcesComponent } from './pages/sources/sources.component';


@NgModule({
  declarations: [SourcesComponent],
  imports: [
    SourcesRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SourcesModule { }
