import { Component } from '@angular/core';
import { ToolsCartService } from '../tools-cart.service';
import { Tools } from '../tools-list/Tools';
import { Observable } from 'rxjs';

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


}
