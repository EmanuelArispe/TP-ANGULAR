import { Component } from '@angular/core';
import { ToolsCartService } from '../service/tools-cart.service';
import { Tools } from '../tools-list/Tools';
import { Observable, isEmpty } from 'rxjs';

@Component({
  selector: 'app-tools-cart',
  templateUrl: './tools-cart.component.html',
  styleUrl: './tools-cart.component.scss'
})
export class ToolsCartComponent {
  
  cartList$!: Observable<Tools[]> ;
constructor(private cart: ToolsCartService){
  this.cartList$ = cart.cartList.asObservable();
}

sumaTotal():number {
  let suma = 0;
  this.cartList$.forEach(next => next.forEach(element => {
    suma += element.price*element.quantity;}))
    return suma;

}
isEmpty():boolean {
  let empty = false;
  this.cartList$.forEach(next => next.forEach(element => {
      empty = element.clearance;
      return;
    }
  ));
  return empty;
}

finalyShop():void{
  // se deberia quilar los elementos de la API y actualizar la vista
  alert("Se realizo la compra con exito");
}

removeAll():void{
  this.cart.removeAllToCart();
  // Se deberia actualizar la lista con los elementos que se quitaron volverlos a agregar
  alert("Compra descartada");
}
}
