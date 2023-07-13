import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoadingComponent } from './loading/loading.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    LoadingComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  exports:[
    HeaderComponent,
    LoadingComponent,
    FooterComponent
  ]
})
export class SharedModule { }
