import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DataSourcesComponent } from './pages';
import { SettingsComponent } from './pages';
import { ParametersComponent } from './pages';
import { AddPrmDlgComponent } from './pages';

const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'data-sources', component: DataSourcesComponent },
  { path: 'parameters', component: ParametersComponent },
  { path: 'add-prm-dlg', component: AddPrmDlgComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SettingsRoutingModule { }
