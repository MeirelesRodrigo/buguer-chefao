import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { ProdutosService } from '../../../services/produtos/produtos.service';
import { MesasService } from '../../../services/mesas/mesas.service';
import { ProdutoConsumido } from '../../../models/request/produtos-consumidos.request';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-mesa-detalhes',
  imports: [CommonModule, AccordionModule, Toast],
  templateUrl: './mesa-detalhes.component.html',
  providers: [MessageService]
})
export class MesaDetalhesComponent {

  codigoMesa = '';
  menuCarregado: any[] = [];
  produtosConsumidos: ProdutoConsumido[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private produtosService: ProdutosService,
    private mesaService: MesasService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      this.codigoMesa = params.get('id') ?? '';

      this.produtosService.listarProdutosMenu().subscribe(resp => {
        this.menuCarregado = resp;
      });
      this.carregarProdutosConsumidos();
    });
  }

  adicionarProduto(menu: any) {
    const produto: ProdutoConsumido = {
      nome: menu.Nome,
      valor: menu.Valor,
      quantidade: 1,
      criadoEm: new Date()
    };

    this.mesaService.adicionarProdutosMesa(this.codigoMesa, produto)
      .then(() => {
        this.mensagemProdutoAdd(produto.nome);
        this.carregarProdutosConsumidos();
      });
  }

  carregarProdutosConsumidos() {
    this.mesaService.listarProdutosConsumidos(this.codigoMesa)
      .subscribe(produtos => {
        this.produtosConsumidos = produtos.sort((a, b) => a.nome.localeCompare(b.nome));
      });
  }

  get totalMesa(): number {
    return this.produtosConsumidos.reduce((total, item) => {
      return total + (item.valor * item.quantidade);
    }, 0);
  }

  removerProduto(produto: ProdutoConsumido) {
    this.mesaService.removerProdutoMesa(this.codigoMesa, produto)
      .then(() =>
        this.carregarProdutosConsumidos()
      );
    this.mensagemProdutoExc(produto.nome)
  }

  mensagemProdutoAdd(produto: any) {
    this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: `Produto ${produto} adicionado` });
  }
  mensagemProdutoExc(produto: any) {
    this.messageService.add({ severity: 'warn', summary: 'Atenção!', detail: `Produto ${produto} removido` });
  }
}
