import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './pages/reports/reports.component';
import { ReportComponent } from './pages/report/report.component';
import { LogComponent } from './pages/log/log.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { PrintComponent } from './pages/print/print.component';

@NgModule({
  declarations: [ReportsComponent, ReportComponent, LogComponent, PrintComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    //MatTabsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReportsModule { }
