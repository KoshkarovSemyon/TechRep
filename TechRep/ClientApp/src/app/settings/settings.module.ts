import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';

import { SettingsRoutingModule } from './settings-routing.module';
import { DataSourcesComponent } from './pages/data-sources/data-sources.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ParametersComponent } from './pages/parameters/parameters.component';
import { ParameterComponent } from './pages/parameter/parameter.component';
import { AddPrmDlgComponent } from './pages/add-prm-dlg/add-prm-dlg.component';
import { InputFormsComponent } from './pages/input-forms/input-forms.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { AddDepDlgComponent } from './pages/add-dep-dlg/add-dep-dlg.component';
import { AddFormDlgComponent } from './pages/add-form-dlg/add-form-dlg.component';

@NgModule({
  declarations: [
    DataSourcesComponent,
    SettingsComponent,
    ParametersComponent,
    ParameterComponent,
    AddPrmDlgComponent,
    InputFormsComponent,
    DepartmentsComponent,
    AddDepDlgComponent,
    AddFormDlgComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SettingsRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SettingsModule { }
