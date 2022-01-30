import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent } from './main/main.component';
import {IndexComponent } from './index/index.component';
import {ContactComponent } from './contact/contact.component';



const routes: Routes = [

    { path: '', redirectTo: 'main', pathMatch: 'full'},
    { path: 'main', component: MainComponent},
    { path: 'index', component: IndexComponent},
    { path: 'contact', component: ContactComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
