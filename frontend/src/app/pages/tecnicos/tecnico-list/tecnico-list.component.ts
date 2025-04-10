import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent {
  tecnicos = [
    { id: 1, nome: 'João da Silva', cpf: '123.456.789-00', email: 'joao@email.com' },
    { id: 2, nome: 'Maria Oliveira', cpf: '987.654.321-00', email: 'maria@email.com' },
  ];

  constructor(private router: Router) {}

  novoTecnico() {
    this.router.navigate(['/tecnicos/novo']);
  }
}
