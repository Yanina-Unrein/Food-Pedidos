import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ComercioComponent } from './application/comercio/comercio.component';
import { IniciarSesionComponent } from './application/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './application/registrarse/registrarse.component';


const routes: Routes = [
  { path:'', component:InicioComponent},
  { path:'login', component:IniciarSesionComponent},
  { path:'registrarse', component:RegistrarseComponent},
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
