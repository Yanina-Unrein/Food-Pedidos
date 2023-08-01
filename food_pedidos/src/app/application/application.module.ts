import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { DestacadosComponent } from './destacados/destacados.component';
import { BannerComponent } from './banner/banner.component';
import { ProductosComponent } from './productos/productos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SharedModule } from '../shared/shared.module';
import { ComercioComponent } from './comercio/comercio.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FavoritosComponent } from './favoritos/favoritos.component';



@NgModule({
  declarations: [
    SearchComponent,
    DestacadosComponent,
    BannerComponent,
    ProductosComponent,
    PerfilComponent,
    ComercioComponent,
    IniciarSesionComponent,
    RegistrarseComponent,
    CatalogoComponent,
    FavoritosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports:[
    SearchComponent,
    DestacadosComponent,
    BannerComponent,
    ProductosComponent,
    FavoritosComponent
  ]
})
export class ApplicationModule { }
