import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './Includes/base/base.component';
import { PaginaPrincipalComponent } from './Components/pagina-principal/pagina-principal.component';
import { BaseRegistroComponent } from './Components/base-registro/base-registro.component';


const routes: Routes = [

  { path: '', component: BaseComponent },
  { path: 'welcome', component: PaginaPrincipalComponent },
  { path: 'registro', component: BaseRegistroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
