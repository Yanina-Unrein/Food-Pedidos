import { Component } from '@angular/core';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent {
  comidas = [
    {
      imagen: 'https://www.clarin.com/img/2022/05/27/0HXb0UR0v_2000x1500__1.jpg',
      titulo: 'COMIDA',
      comercio: 'RESTAURANTE',
      precio: '$10.00'
    },
    {
      imagen: 'https://www.clarin.com/img/2022/05/27/0HXb0UR0v_2000x1500__1.jpg',
      titulo: 'COMIDA',
      comercio: 'RESTAURANTE',
      precio: '$15.00'
    },
    {
      imagen: 'https://www.clarin.com/img/2022/05/27/0HXb0UR0v_2000x1500__1.jpg',
      titulo: 'COMIDA',
      comercio: 'RESTAURANTE',
      precio: '$15.00'
    },
    {
      imagen: 'https://www.clarin.com/img/2022/05/27/0HXb0UR0v_2000x1500__1.jpg',
      titulo: 'COMIDA',
      comercio: 'RESTAURANTE',
      precio: '$15.00'
    },
    {
      imagen: 'https://www.clarin.com/img/2022/05/27/0HXb0UR0v_2000x1500__1.jpg',
      titulo: 'COMIDA',
      comercio: 'RESTAURANTE',
      precio: '$15.00'
    }  
  ];

  pedir(comida: any) {
    console.log('Pedido:', comida);
  }
}
