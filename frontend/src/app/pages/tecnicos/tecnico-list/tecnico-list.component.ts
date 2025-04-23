import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { TecnicoService } from '../../../services/tecnico.service';
import { Tecnico } from '../../../models/tecnico.model';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {
  tecnicos: Tecnico[] = [];

  constructor(
    private tecnicoService: TecnicoService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.carregarTecnicos();
  }

  carregarTecnicos(): void {
    this.tecnicoService.findAll().subscribe({
      next: (data) => this.tecnicos = data,
      error: () => this.toastr.error('Erro ao carregar técnicos.')
    });
  }

  editar(id: number): void {
    this.router.navigate(['/tecnicos', id]).then(() => {
      this.toastr.info('Redirecionando para edição do técnico...', 'Editando Técnico');
    });
  }

  excluir(id: number): void {
    if (confirm('Deseja mesmo excluir?')) {
      this.tecnicoService.delete(id).subscribe({
        next: () => {
          this.toastr.success('Técnico excluído com sucesso!');
          this.carregarTecnicos();
        },
        error: () => {
          this.toastr.error('Erro ao excluir técnico.');
        }
      });
    }
  }

  novo(): void {
    this.router.navigate(['/tecnicos/novo']).then(() => {
      this.toastr.info('Redirecionando para novo técnico...', 'Novo Técnico');
    });
  }
}
