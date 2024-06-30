import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsListComponent } from './tools-list/tools-list.component';
import { FormsModule } from '@angular/forms';
import { ToolsAboutComponent } from './tools-about/tools-about.component';
import { ToolsCompraComponent } from './tools-compra/tools-compra.component';
import { ToolsCartComponent } from './tools-cart/tools-cart.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ToolsListComponent,
    ToolsAboutComponent,
    ToolsCompraComponent,
    ToolsCartComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
