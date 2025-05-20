import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { ProdutosService } from '../../../services/produtos/produtos.service';
import { MesasService } from '../../../services/mesas/mesas.service';
import { ProdutoConsumido } from '../../../models/request/produtos-consumidos.request';

@Component({
  selector: 'app-mesa-detalhes',
  imports: [CommonModule, AccordionModule],
  templateUrl: './mesa-detalhes.component.html',
})
export class MesaDetalhesComponent {

  codigoMesa = '';
  menuCarregado: any[] = [];
  produtosConsumidos: ProdutoConsumido[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private produtosService: ProdutosService,
    private mesaService: MesasService
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
        this.carregarProdutosConsumidos(); // Recarrega após adicionar
      });
  }

  carregarProdutosConsumidos() {
    this.mesaService.listarProdutosConsumidos(this.codigoMesa)
      .subscribe(produtos => {
        this.produtosConsumidos = produtos;
      });
  }
}
