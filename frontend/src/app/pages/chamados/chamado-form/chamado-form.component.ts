import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamado } from '../../../models/chamado.model';
import { ChamadoService } from '../../../services/chamado.service';
import { ClienteService } from '../../../services/cliente.service';
import { TecnicoService } from '../../../services/tecnico.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-chamado-form',
  templateUrl: './chamado-form.component.html'
})
export class ChamadoFormComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  clientes: any[] = [];
  tecnicos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private chamadoService: ChamadoService,
    private clienteService: ClienteService,
    private tecnicoService: TecnicoService,
    private router: Router,
    public route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      status: ['ABERTO'],
      prioridade: ['BAIXA'], // ← Isso tem que existir!
      cliente: [null, Validators.required],
      tecnico: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.chamadoService.getChamado(+id).subscribe(data => this.form.patchValue(data));
    }

    this.clienteService.getClientes().subscribe(data => this.clientes = data);
    this.tecnicoService.findAll().subscribe(data => this.tecnicos = data);

  }

  salvar(): void {
    const chamado: Chamado = this.form.value;

    if (this.isEdit) {
      const id = this.route.snapshot.paramMap.get('id');
      this.chamadoService.updateChamado(+id!, chamado).subscribe(() => this.router.navigate(['/chamados']));
    } else {
      this.chamadoService.createChamado(chamado).subscribe(() => this.router.navigate(['/chamados']));
    }
  }
}
