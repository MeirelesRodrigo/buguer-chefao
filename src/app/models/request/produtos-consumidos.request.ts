export interface ProdutoConsumido {
  id?: string; // opcional para quando vier do Firebase
  nome: string;
  valor: number;
  quantidade: number;
  criadoEm: Date;
}