import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  cliente = {
    id: null,
    nome: '',
    email: '',
    telefone: '',
    endereco: ''
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get(`http://localhost:8080/clientes/${id}`).subscribe((data: any) => {
        this.cliente = data;
      });
    }
  }

  salvar(): void {
    if (this.cliente.id) {
      // Atualizar cliente existente (PUT)
      this.http.put(`http://localhost:8080/clientes/${this.cliente.id}`, this.cliente)
        .subscribe({
          next: (res) => {
            console.log('Cliente atualizado com sucesso:', res);
            this.voltarParaLista();
          },
          error: (err) => {
            console.error('Erro ao atualizar cliente:', err);
          }
        });
    } else {
      // Criar novo cliente (POST)
      this.http.post('http://localhost:8080/clientes', this.cliente)
        .subscribe({
          next: (res) => {
            console.log('Cliente salvo com sucesso:', res);
            this.voltarParaLista();
          },
          error: (err) => {
            console.error('Erro ao salvar cliente:', err);
          }
        });
    }
  }

  voltarParaLista(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/clientes']);
    });
  }
}
