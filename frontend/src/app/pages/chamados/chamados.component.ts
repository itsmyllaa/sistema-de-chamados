import { Component, OnInit } from '@angular/core';
import { ChamadoService } from '../../services/chamado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css']
})
export class ChamadosComponent implements OnInit {
  chamados: any[] = [];

  constructor(
    private chamadoService: ChamadoService,
    private router: Router) {}

  ngOnInit(): void {
    // Chamar o serviço para buscar os chamados
    this.chamadoService.getChamados().subscribe((data) => {
      this.chamados = data;
      console.log(this.chamados); // Verificar no console os dados
    });
  }
  novoChamado() {
    this.router.navigate(['/chamados/novo']);
  }
}

