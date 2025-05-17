import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { Produtos_Response } from '../../models/response/produtos.response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardapio',
  imports: [CommonModule],
  templateUrl: './cardapio.component.html',
})
export class CardapioComponent implements OnInit {
  sanduiches: Produtos_Response[] = [];
  porcoes: Produtos_Response[] = [];
  bebidas: Produtos_Response[] = [];

  constructor(
    private produtosService: ProdutosService
  ) { }

  ngOnInit(): void {
    this.buscarTodosProdutos();
  }

  buscarTodosProdutos() {
    this.produtosService.listarProdutosMenu().subscribe(response => {
      console.log(response)
      this.sanduiches = response.filter(p => p.Categoria === 'sanduiche');
      this.porcoes = response.filter(p => p.Categoria === 'porcao');
      this.bebidas = response.filter(p => p.Categoria === 'bebida');
    });
  }
}
