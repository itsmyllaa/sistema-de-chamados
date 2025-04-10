import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent {
  clientes = [
    { id: 1, nome: 'Ana Souza', cpf: '111.222.333-44', email: 'ana@email.com' },
    { id: 2, nome: 'Carlos Lima', cpf: '555.666.777-88', email: 'carlos@email.com' },
  ];

  constructor(private router: Router) {}

  novoCliente() {
    this.router.navigate(['/clientes/novo']);
  }
}
