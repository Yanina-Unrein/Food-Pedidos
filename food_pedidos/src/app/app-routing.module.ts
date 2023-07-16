import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ComercioComponent } from './application/comercio/comercio.component';


const routes: Routes = [
  { path:'', component:InicioComponent},
  { path:'comercio', component:ComercioComponent}
]; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
