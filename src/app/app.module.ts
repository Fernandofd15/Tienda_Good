import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavmenuComponent } from './componentes/navmenu/navmenu.component';
import { PagenotfoundComponent } from './componentes/pagenotfound/pagenotfound.component';
import { AnimalitosComponent } from './componentes/animalitos/animalitos.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ComprasComponent } from './componentes/compras/compras.component';
import { HttpClientModule } from '@angular/common/http';
import { TiendasComponent } from './componentes/tiendas/tiendas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavmenuComponent,
    PagenotfoundComponent,
    AnimalitosComponent,
    UsuariosComponent,
    ComprasComponent,
    TiendasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
