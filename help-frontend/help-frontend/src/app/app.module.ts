import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './Includes/base/base.component';
import { FooterComponent } from './Includes/footer/footer.component';
import { HeaderComponent } from './Includes/header/header.component';
import { InicioPrincipalComponent } from './Components/inicio-principal/inicio-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    FooterComponent,
    HeaderComponent,
    InicioPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
