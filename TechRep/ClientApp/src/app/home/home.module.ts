import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HelpComponent } from './pages/help/help.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [HomeComponent, HelpComponent],
  imports: [
    HomeRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
