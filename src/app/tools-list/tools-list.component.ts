import { Component } from '@angular/core';
import { Tools } from './Tools';
import { ToolsCartService } from '../tools-cart.service';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrl: './tools-list.component.scss'
})
export class ToolsListComponent {


  constructor(private cart: ToolsCartService){
  }

  bulones: Tools[] =[ {
    id: 1,
    name:'Tornillo',
    type: 'Paso fino',
    price: 400,
    stock: 4,
    image: './t-pasoFino.jpg',
    clearance: true,
    quantity: 0,
  },
  {
    id: 2,
    name:'Arandela',
    type: 'Grove',
    price: 10,
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
    stock: 5,
    image: './t-pasoFino.jpg',
    clearance: false,
    quantity: 0,
  }
];


maxReached(m: string):void{
  alert(m);
}

addToCart(bulon : Tools): void{
  this.cart.addToCart(bulon);
  bulon.stock -= bulon.quantity;
  bulon.quantity = 0;
}

}
