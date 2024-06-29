import { Component } from '@angular/core';
import { Tools } from './Tools';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrl: './tools-list.component.scss'
})
export class ToolsListComponent {

  bulones: Tools[] =[ {
    id: 1,
    name:'Tornillo',
    type: 'Paso fino',
    price: 15,
    stock: 150,
    image: './t-pasoFino.jpg',
    clearance: true,
    quantity: 0,
  },
  {
    id: 2,
    name:'Arandela',
    type: 'Grove',
    price: 15,
    stock: 0,
    image: './t-pasoFino.jpg',
    clearance: true,
    quantity: 0,
  },
  {
    id: 3,
    name:'Remache',
    type: '30 mm',
    price: 15,
    stock: 150,
    image: './t-pasoFino.jpg',
    clearance: false,
    quantity: 0,
  }
];

upQuantity(bulon: Tools): void{
  if(bulon.quantity < bulon.stock)
  bulon.quantity++;
}

downQuantity(bulon: Tools): void{
  if(bulon.quantity > 0)
  bulon.quantity--;
}

changeQuantity(event: any, bulon : Tools): void{
  if(event.key > '9'){
    bulon.quantity = 0;
  }
}

}
