import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    SearchComponent,
    DestacadosComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchComponent,
    DestacadosComponent,
    BannerComponent
  ]
})
export class ApplicationModule { }
