import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnico-form',
  templateUrl: './tecnico-form.component.html',
  styleUrls: ['./tecnico-form.component.css']
})
export class TecnicoFormComponent {
  tecnico = {
    id: null,
    nome: '',
    cpf: '',
    email: ''
  };


  constructor(private router: Router) {}

  salvar() {
    console.log('Técnico salvo:', this.tecnico);
    this.router.navigate(['/tecnicos']);
  }
}
