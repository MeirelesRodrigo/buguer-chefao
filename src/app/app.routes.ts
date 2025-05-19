import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MesasComponent } from './components/mesas/mesas.component';

export const routes: Routes = [
    {path: "cardapio", component: MainPageComponent},
    {path: "", component: MainPageComponent},
    {path: "mesas", component: MesasComponent}
];
