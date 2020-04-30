import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LocalAppsComponent } from './local-apps/local-apps.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, AppHomeComponent, AboutComponent, LocalAppsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
