import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { DestacadosComponent } from './destacados/destacados.component';



@NgModule({
  declarations: [
    SearchComponent,
    DestacadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchComponent,
    DestacadosComponent
  ]
})
export class ApplicationModule { }
