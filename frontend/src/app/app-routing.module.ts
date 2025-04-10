import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { TecnicoListComponent } from './pages/tecnicos/tecnico-list/tecnico-list.component';
import { TecnicoFormComponent } from './pages/tecnicos/tecnico-form/tecnico-form.component';
import { ChamadoListComponent } from './pages/chamados/chamado-list/chamado-list.component';
import { ChamadoFormComponent } from './pages/chamados/chamado-form/chamado-form.component';
import { ClienteFormComponent } from './pages/clientes/cliente-form/cliente-form.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'tecnicos', component: TecnicoListComponent },
  { path: 'tecnicos/novo', component: TecnicoFormComponent },
  { path: 'chamados', component: ChamadoListComponent },
  { path: 'chamados/novo', component: ChamadoFormComponent },
  { path: 'clientes/novo', component: ClienteFormComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
