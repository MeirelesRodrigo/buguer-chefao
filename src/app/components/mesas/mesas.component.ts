import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ProdutosService } from '../../services/produtos.service';

import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-mesas',
  imports: [CommonModule, Dialog, AccordionModule ],
  templateUrl: './mesas.component.html',
})
export class MesasComponent implements OnInit{

  constructor(
    private produtosService: ProdutosService
  ){}

  ngOnInit(): void {
   this.carregarMenu()
  }

  modalAberta: boolean = false
  mesaSelecionada: string = ""
  menuCarregado: any[] = [];
  
  mesasDisponiveis = [
    { numero: "01"},
    { numero: "02"},
    { numero: "03"},
    { numero: "04"},
    { numero: "05"},
    { numero: "06"},
    { numero: "07"},
    { numero: "08"},
    { numero: "09"},
    { numero: "10"},
  ]

  abrirModalMesas(codigoMesa: string){
    console.log(codigoMesa)
    this.modalAberta = true
    this.mesaSelecionada = codigoMesa
  }

  carregarMenu(){
    this.produtosService.listarProdutosMenu().subscribe(resp => {
      this.menuCarregado = resp
      console.log(this.menuCarregado)
    })
  }

  
}
