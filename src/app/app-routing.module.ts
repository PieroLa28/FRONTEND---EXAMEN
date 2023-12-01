import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Compon1Component } from './compon-1/compon-1.component';
import { SettingsComponent } from './settings/settings.component';
import { Compon2Component } from './compon-2/compon-2.component';
import { Compon3Component } from './compon-3/compon-3.component';
import { Compon4Component } from './compon-4/compon-4.component';
import { Compon5Component } from './compon-5/compon-5.component';

const routes: Routes = [
  {path: '', redirectTo: 'compon-1', pathMatch: 'full'},
  {path: 'compon-1', component: Compon1Component},
  {path: 'compon-2', component: Compon2Component},
  {path: 'compon-3', component: Compon3Component},
  {path: 'compon-4', component: Compon4Component},
  {path: 'compon-5', component: Compon5Component},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
