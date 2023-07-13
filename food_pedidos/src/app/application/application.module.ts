import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { BannerComponent } from './banner/banner.component';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [
    SearchComponent,
    DestacadosComponent,
    BannerComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchComponent,
    DestacadosComponent,
    BannerComponent,
    ProductosComponent
  ]
})
export class ApplicationModule { }
