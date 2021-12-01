import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import {AnimalitosComponent} from './componentes/animalitos/animalitos.component';
import {UsuariosComponent} from './componentes/usuarios/usuarios.component';
import {TiendasComponent} from './componentes/tiendas/tiendas.component';
import {ComprasComponent} from './componentes/compras/compras.component';
import {PagenotfoundComponent} from './componentes/pagenotfound/pagenotfound.component';
import {NavmenuComponent} from './componentes/navmenu/navmenu.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch:  'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'animalitos', component: AnimalitosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'tiendas', component: TiendasComponent },
  { path: 'compras', component: ComprasComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
