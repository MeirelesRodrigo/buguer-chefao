import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { CardapioComponent } from "../../components/cardapio/cardapio.component";

@Component({
  selector: 'app-main-page',
  imports: [BannerComponent, CardapioComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
