import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {
  cliente = {
    id: null,
    nome: '',
    cpf: '',
    email: ''
  };

  constructor(private router: Router) {}

  salvar() {
    console.log('Cliente salvo:', this.cliente);
    this.router.navigate(['/clientes']);
  }
}
