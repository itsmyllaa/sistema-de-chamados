import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

import { TecnicoListComponent } from './pages/tecnicos/tecnico-list/tecnico-list.component';
import { TecnicoFormComponent } from './pages/tecnicos/tecnico-form/tecnico-form.component';

import { ChamadosComponent } from './pages/chamados/chamados.component';
import { ChamadoListComponent } from './pages/chamados/chamado-list/chamado-list.component';
import { ChamadoFormComponent } from './pages/chamados/chamado-form/chamado-form.component';
import {ClienteFormComponent} from "./pages/clientes/cliente-form/cliente-form.component";
import { ClienteListComponent } from './pages/clientes/cliente-list/cliente-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClientesComponent,
    TecnicoListComponent,
    TecnicoFormComponent,
    ChamadosComponent,
    ChamadoListComponent,
    ChamadoFormComponent,
    ClienteFormComponent,
    ClienteListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
