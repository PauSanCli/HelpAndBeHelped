import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './Includes/base/base.component';
import { FooterComponent } from './Includes/footer/footer.component';
import { HeaderComponent } from './Includes/header/header.component';
import { InicioPrincipalComponent } from './Components/inicio-principal/inicio-principal.component';
import { PaginaPrincipalComponent } from './Components/pagina-principal/pagina-principal.component';
import { EstructuraPrincipalComponent } from './Components/estructura-principal/estructura-principal.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Components/register/register.component';
import { BaseRegistroComponent } from './Components/base-registro/base-registro.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { EventoInfoComponent } from './Components/evento-info/evento-info.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    FooterComponent,
    HeaderComponent,
    InicioPrincipalComponent,
    PaginaPrincipalComponent,
    EstructuraPrincipalComponent,
    RegisterComponent,
    BaseRegistroComponent,
    LogoutComponent,
    EventoInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
