import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SourcesRoutingModule } from './sources-routing.module';
import { SourcesComponent } from './pages/sources/sources.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { SourceComponent } from './pages/source/source.component';

@NgModule({
  declarations: [SourcesComponent, SourceComponent],
  imports: [
    SourcesRoutingModule,
    MatTreeModule,
    MatIconModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SourcesModule { }
