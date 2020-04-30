import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from '../app-home/app-home.component';
import { AboutComponent } from '../about/about.component';
import { LocalAppsComponent } from '../local-apps/local-apps.component';


const routes: Routes = [
  {path: '', component: AppHomeComponent},
  {path: 'home', component: AppHomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'app-list', component: LocalAppsComponent},
  {path: '**', component: AppHomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }