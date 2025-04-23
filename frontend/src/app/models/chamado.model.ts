export interface Chamado {
  id?: number;
  titulo: string;
  descricao: string;
  cliente: { id: number; nome?: string };
  tecnico: { id: number; nome?: string };
  status: 'ABERTO' | 'EM_ANDAMENTO' | 'FECHADO';
  prioridade: 'BAIXA' | 'MEDIA' | 'ALTA';
}
