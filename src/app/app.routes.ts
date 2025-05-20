import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { MesaDetalhesComponent } from './components/mesas/mesa-detalhes/mesa-detalhes.component';

export const routes: Routes = [
    {path: "cardapio", component: MainPageComponent},
    {path: "", component: MainPageComponent},
    {path: "mesas", component: MesasComponent},
    {path: "mesas/:id", component: MesaDetalhesComponent}
];
