import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chamado-form',
  templateUrl: './chamado-form.component.html',
  styleUrls: ['./chamado-form.component.css']
})
export class ChamadoFormComponent {
  chamado: {
    id: number | null;
    titulo: string;
    descricao: string;
    cliente: string;
    tecnico: string;
    status: string;
    prioridade: string;
  } = {
    id: null,
    titulo: '',
    descricao: '',
    cliente: '',
    tecnico: '',
    status: '',
    prioridade: ''
  };

  constructor(private router: Router) {}

  salvar() {
    console.log('Chamado salvo:', this.chamado);
    this.router.navigate(['/chamados']);
  }
}
