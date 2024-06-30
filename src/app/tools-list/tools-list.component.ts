import { Component } from '@angular/core';
import { Tools } from './Tools';
import { ToolsCartService } from '../service/tools-cart.service';
import { ToolDataService } from '../service/tool-data.service';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrl: './tools-list.component.scss'
})
export class ToolsListComponent {


  constructor(private cart: ToolsCartService, 
              private toolsDataService: ToolDataService){
  }

  bulones: Tools[] = [];


  ngOnInit():void{
    this.toolsDataService.getAll()
    .subscribe(tools => this.bulones = tools);
  }
  
maxReached(m: string):void{
  alert(m);
}

addToCart(bulon : Tools): void{
  this.cart.addToCart(bulon);
  bulon.stock -= bulon.quantity;
  bulon.quantity = 0;
}

}
