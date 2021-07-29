import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './pages/schedule/schedule.component';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    ScheduleRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ScheduleModule { }
