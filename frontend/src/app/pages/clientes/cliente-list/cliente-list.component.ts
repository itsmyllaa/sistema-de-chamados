import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(() => {
      this.carregarClientes();
    });
  }

  carregarClientes() {
    console.log('🔁 Função carregarClientes() chamada');

    this.http.get('http://localhost:8080/clientes')
      .subscribe(
        (response: any) => {
          console.log('✅ Clientes carregados:', response);
          this.clientes = response;
        },
        (error) => {
          console.error('❌ Erro ao carregar os clientes:', error);
        }
      );
  }


  editarCliente(id: number) {
    this.router.navigate([`/clientes/editar/${id}`]);
  }

  deletarCliente(id: number) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá desfazer essa ação!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/clientes/${id}`).subscribe({
          next: () => {
            Swal.fire('Deletado!', 'O cliente foi removido com sucesso.', 'success');
            this.carregarClientes(); // recarrega a lista
          },
          error: (err) => {
            console.error('Erro ao deletar cliente:', err);
            Swal.fire('Erro', 'Ocorreu um erro ao deletar o cliente.', 'error');
          }
        });
      }
    });
  }

  novoCliente() {
    this.router.navigate(['/clientes/novo']);
  }
}
