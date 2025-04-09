import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadosListaComponent } from './pages/chamados-lista/chamados-lista.component';
import { ChamadoDetalhesComponent } from './pages/chamado-detalhes/chamado-detalhes.component';
import { NovoChamadoComponent } from './pages/novo-chamado/novo-chamado.component';

const routes: Routes = [
  { path: '', redirectTo: 'chamados', pathMatch: 'full' },
  { path: 'chamados', component: ChamadosListaComponent },
  { path: 'chamados/novo', component: NovoChamadoComponent },
  { path: 'chamados/:id', component: ChamadoDetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
