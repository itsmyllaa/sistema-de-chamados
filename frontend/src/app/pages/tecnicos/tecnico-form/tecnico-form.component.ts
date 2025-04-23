import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { Tecnico } from 'src/app/models/tecnico.model';

@Component({
  selector: 'app-tecnico-form',
  templateUrl: './tecnico-form.component.html',
  styleUrls: ['./tecnico-form.component.css']
})
export class TecnicoFormComponent implements OnInit {
  tecnicoForm!: FormGroup;
  tecnicoId!: number;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private tecnicoService: TecnicoService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tecnicoId = this.route.snapshot.params['id'];
    this.isEditMode = !!this.tecnicoId;

    this.tecnicoForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      telefone: [''],
      especialidade: [''],
      perfis: [[]]
    });

    if (this.isEditMode) {
      this.tecnicoService.findById(this.tecnicoId).subscribe({
        next: (tecnico) => this.tecnicoForm.patchValue(tecnico),
        error: () => alert('Erro ao buscar técnico')
      });
    }
  }

  togglePerfil(perfil: string): void {
    const perfis = this.tecnicoForm.value.perfis || [];
    const index = perfis.indexOf(perfil);

    if (index === -1) {
      perfis.push(perfil);
    } else {
      perfis.splice(index, 1);
    }

    this.tecnicoForm.patchValue({ perfis });
  }

  onSubmit(): void {
    if (this.tecnicoForm.invalid) return;

    const tecnico: Tecnico = this.tecnicoForm.value;

    if (this.isEditMode) {
      this.tecnicoService.update(this.tecnicoId, tecnico).subscribe({
        next: () => this.router.navigate(['/tecnicos']),
        error: () => alert('Erro ao atualizar técnico')
      });
    } else {
      this.tecnicoService.create(tecnico).subscribe({
        next: () => this.router.navigate(['/tecnicos']),
        error: () => alert('Erro ao criar técnico')
      });
    }
  }
}
