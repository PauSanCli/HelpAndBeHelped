import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './Includes/base/base.component';
import { PaginaPrincipalComponent } from './Components/pagina-principal/pagina-principal.component';
import { BaseRegistroComponent } from './Components/base-registro/base-registro.component';
import { LogoutComponent }  from './Components/logout/logout.component';
import { EventoInfoComponent } from './Components/evento-info/evento-info.component'
import { NewEventoComponent } from './Components/new-evento/new-evento.component';



const routes: Routes = [

  { path: '', component: BaseComponent },
  { path: 'welcome', component: PaginaPrincipalComponent },
  { path: 'registro', component: BaseRegistroComponent},
  { path: 'logout' , component: LogoutComponent },
  { path: 'getEvento/:id', component: EventoInfoComponent},
  { path: 'newEvento', component: NewEventoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
