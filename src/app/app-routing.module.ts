import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';import { ToolsCompraComponent } from './tools-compra/tools-compra.component';
import { ToolsAboutComponent } from './tools-about/tools-about.component';

const routes: Routes = [
  {path:'', component: ToolsCompraComponent},
  {path:'tools', component: ToolsCompraComponent},
  {path: 'about', component: ToolsAboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
