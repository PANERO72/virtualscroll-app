import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualScrollComponent } from "./components/virtual-scroll/virtual-scroll.component";
import { DragdropComponent } from "./components/drag-drop/drag-drop.component";

const routes: Routes = [
  { path: 'virtualscroll', component: VirtualScrollComponent, data: { titulo: 'Desplazamiento Virtual' } },
  { path: 'dragdrop', component: DragdropComponent, data: { titulo: 'Arrastrar y Soltar' } },  
  { path: '**', pathMatch: 'full', redirectTo: '/virtualscroll' },
  { path: '', pathMatch: 'full', redirectTo: '/virtualscroll' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }