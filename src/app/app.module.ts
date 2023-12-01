import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Compon1Component } from './compon-1/compon-1.component';
import { SettingsComponent } from './settings/settings.component';
import { Compon2Component } from './compon-2/compon-2.component';
import { Compon3Component } from './compon-3/compon-3.component';
import { Compon4Component } from './compon-4/compon-4.component';
import { Compon5Component } from './compon-5/compon-5.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    Compon1Component,
    SettingsComponent,
    Compon2Component,
    Compon3Component,
    Compon4Component,
    Compon5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
