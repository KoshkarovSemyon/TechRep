import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './pages/reports/reports.component';
import { ReportComponent } from './pages/report/report.component';
import { LogComponent } from './pages/log/log.component';

import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [ReportsComponent, ReportComponent, LogComponent],
  imports: [
    ReportsRoutingModule,
    MatTabsModule
  ],
  exports: [
    //MatTabsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReportsModule { }
