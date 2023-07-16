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



@NgModule({
  declarations: [
    SearchComponent,
    DestacadosComponent,
    BannerComponent,
    ProductosComponent,
    PerfilComponent,
    ComercioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    SearchComponent,
    DestacadosComponent,
    BannerComponent,
    ProductosComponent
  ]
})
export class ApplicationModule { }
