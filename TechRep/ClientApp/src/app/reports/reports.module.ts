import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './pages/reports/reports.component';



@NgModule({
  declarations: [ReportsComponent],
  imports: [
    ReportsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReportsModule { }
