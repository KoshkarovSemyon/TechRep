import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './pages';
import { ReportComponent } from './pages';
import { LogComponent } from './pages';

const routes: Routes = [
  { path: 'reports', component: ReportsComponent },
  { path: 'report', component: ReportComponent },
  { path: 'log', component: LogComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReportsRoutingModule { }
