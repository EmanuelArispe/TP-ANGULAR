import { Injectable } from '@angular/core';
import { Tools } from '../tools-list/Tools';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsCartService {

  private _cartList: Tools[] = [];
  cartList: BehaviorSubject<Tools[]> = new BehaviorSubject(this._cartList); 

  constructor() { }

  addToCart(bulon: Tools) {
    let item: Tools | undefined = this._cartList.find((v1)=> v1.id == bulon.id);
    if(!item) {
      this._cartList.push({...bulon});
    }else{
      item.quantity += bulon.quantity;
    }
    this.cartList.next(this._cartList);
  }

 removeAllToCart(){
this._cartList = [];
this.cartList.next(this._cartList);
 }

}
