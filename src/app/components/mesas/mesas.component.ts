import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ProdutosService } from '../../services/produtos/produtos.service';

import { AccordionModule } from 'primeng/accordion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesas',
  imports: [CommonModule, AccordionModule],
  templateUrl: './mesas.component.html',
})
export class MesasComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  modalAberta: boolean = false
  mesaSelecionada: string = ""

  mesasDisponiveis = [
    { numero: "01" },
    { numero: "02" },
    { numero: "03" },
    { numero: "04" },
    { numero: "05" },
    { numero: "06" },
    { numero: "07" },
    { numero: "08" },
    { numero: "09" },
    { numero: "10" },
  ]

  mesaDetalhes(codigoMesa: string) {
    console.log(codigoMesa)
    this.router.navigate(['/mesas', codigoMesa])
  }

}
