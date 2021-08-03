import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SourcesComponent } from './pages';
import { SourceComponent } from './pages';

const routes: Routes = [
  { path: 'sources', component: SourcesComponent },
  { path: 'source', component: SourceComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SourcesRoutingModule { }
