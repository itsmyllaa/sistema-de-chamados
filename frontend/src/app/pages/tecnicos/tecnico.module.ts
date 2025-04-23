import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TecnicoListComponent } from './tecnico-list/tecnico-list.component';
import { TecnicoFormComponent } from './tecnico-form/tecnico-form.component';

@NgModule({
  declarations: [
    TecnicoListComponent,
    TecnicoFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TecnicosModule {}
