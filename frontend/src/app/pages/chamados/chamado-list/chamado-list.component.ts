import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChamadoService } from '../../../services/chamado.service';
import { Chamado } from '../../../models/chamado.model';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent implements OnInit {
  chamados: Chamado[] = [];

  constructor(private chamadoService: ChamadoService, public router: Router) {}

  ngOnInit(): void {
    this.chamadoService.getChamados().subscribe(data => this.chamados = data);
  }

  editar(id: number): void {
    this.router.navigate(['/chamados/editar', id]);
  }

  excluir(id: number): void {
    this.chamadoService.deleteChamado(id).subscribe(() => {
      this.chamados = this.chamados.filter(c => c.id !== id);
    });
  }
}
