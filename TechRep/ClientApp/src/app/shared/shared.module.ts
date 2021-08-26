import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SharedRoutingModule } from './shared-routing.module';

import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TopMenuComponent } from './layout/top-menu/top-menu.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';

@NgModule({
  declarations: [
    NavMenuComponent,
    HeaderComponent,
    FooterComponent,
    TopMenuComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TopMenuComponent,
    SideMenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
