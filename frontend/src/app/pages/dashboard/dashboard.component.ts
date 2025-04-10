import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalChamados: number = 0;
  totalClientes: number = 0;
  totalTecnicos: number = 0;

  constructor() {}

  ngOnInit(): void {
    // Simulação (depois trocamos pelo backend real)
    this.totalChamados = 8;
    this.totalClientes = 5;
    this.totalTecnicos = 3;
  }
}
