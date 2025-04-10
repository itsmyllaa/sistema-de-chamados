import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent {
  chamados = [
    {
      id: 1,
      titulo: 'Erro no sistema',
      status: 'ABERTO',
      prioridade: 'ALTA',
      cliente: 'Ana Souza',
      tecnico: 'Carlos Lima'
    },
    {
      id: 2,
      titulo: 'Falha de login',
      status: 'FECHADO',
      prioridade: 'MÉDIA',
      cliente: 'Pedro Silva',
      tecnico: 'Marina Costa'
    }
  ];

  constructor(private router: Router) {}

  novoChamado() {
    this.router.navigate(['/chamados/novo']);
  }
}
