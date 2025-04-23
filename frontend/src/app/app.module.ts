import { NgModule } from '@angular/core';//
import { BrowserModule } from '@angular/platform-browser';//
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//
import { HttpClientModule } from '@angular/common/http';//
import { ToastrModule } from 'ngx-toastr';//
import { ChartsModule } from 'ng2-charts';//

import { AppRoutingModule } from './app-routing.module';//
import { AppComponent } from './app.component';//

import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';//
import { ClienteFormComponent } from './pages/clientes/cliente-form/cliente-form.component';//
import { ClienteListComponent } from './pages/clientes/cliente-list/cliente-list.component';//
import { ChamadoFormComponent } from './pages/chamados/chamado-form/chamado-form.component';//
import { ChamadoListComponent } from './pages/chamados/chamado-list/chamado-list.component';//

import { TecnicosModule } from './pages/tecnicos/tecnico.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClienteListComponent,
    ClienteFormComponent,
    ChamadoListComponent,
    ChamadoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, // Importado para usar formGroup
    ChartsModule,
    ToastrModule.forRoot(),
    TecnicosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
