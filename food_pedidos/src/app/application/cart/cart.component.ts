import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  tieneComidasFavoritas: boolean = false;
  comidasFavoritas: any[] = []; // Supongamos que esta es tu lista de comidas favoritas
  
  ngOnInit() {
    this.actualizarEstadoComidasFavoritas();
  }

  agregarComidaFavorita(comida: any) {
    // Lógica para agregar una comida a la lista de comidas favoritas
    this.comidasFavoritas.push(comida);
    this.actualizarEstadoComidasFavoritas();
  }

  private actualizarEstadoComidasFavoritas() {
    this.tieneComidasFavoritas = this.comidasFavoritas.length > 0;
  }
}
