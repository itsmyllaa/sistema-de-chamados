import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChamadosListaComponent } from './pages/chamados-lista/chamados-lista.component';
import { ChamadoDetalhesComponent } from './pages/chamado-detalhes/chamado-detalhes.component';
import { NovoChamadoComponent } from './pages/novo-chamado/novo-chamado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChamadosListaComponent,
    ChamadoDetalhesComponent,
    NovoChamadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
