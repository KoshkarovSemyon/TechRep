import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { SettingsRoutingModule } from './settings-routing.module';
import { DataSourcesComponent } from './pages/data-sources/data-sources.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ParametersComponent } from './pages/parameters/parameters.component';
import { ParameterComponent } from './pages/parameter/parameter.component';
import { AddPrmDlgComponent } from './pages/add-prm-dlg/add-prm-dlg.component';

@NgModule({
  declarations: [DataSourcesComponent, SettingsComponent, ParametersComponent, ParameterComponent, AddPrmDlgComponent],
  imports: [
    CommonModule,
    FormsModule,
    SettingsRoutingModule,
    MatIconModule,
    MatDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SettingsModule { }
