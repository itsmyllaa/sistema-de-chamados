import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes = [
    { id: 1, nome: 'Empresa Alpha', cpfOuCnpj: '123.456.789-00', email: 'contato@alpha.com' },
    { id: 2, nome: 'Empresa Beta', cpfOuCnpj: '987.654.321-00', email: 'contato@beta.com' }
  ];

  constructor(private router: Router) {}

  novoCliente() {
    this.router.navigate(['/clientes/novo']);
  }
}
