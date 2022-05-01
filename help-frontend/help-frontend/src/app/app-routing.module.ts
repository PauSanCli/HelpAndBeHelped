import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './Includes/base/base.component';
import { PaginaPrincipalComponent } from './Components/pagina-principal/pagina-principal.component';


const routes: Routes = [

  { path: '', component: BaseComponent },
  { path: 'welcome', component: PaginaPrincipalComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
