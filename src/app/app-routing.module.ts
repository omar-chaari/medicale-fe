import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailProduitComponent } from './components/detail-produit/detail-produit.component';
import { ProduitsComponent } from './components/produits/produits.component';

const routes: Routes = [
  {path: '' , component: ProduitsComponent },
  {path: 'detail/:id' , component: DetailProduitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
