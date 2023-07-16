import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ApplicationModule } from '../application/application.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    ApplicationModule,
    SharedModule
  ]
})
export class PagesModule { }
