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
  listaProdutos: Produtos_Response[] = []

  constructor(
    private produtosService: ProdutosService
  ) { }

  ngOnInit(): void {
    this.buscarTodosProdutos();
  }

  buscarTodosProdutos() {
    this.produtosService.listarProdutosMenu().subscribe(response => {
      this.listaProdutos = response
      console.log(this.listaProdutos)
    })
  }

}
