import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailProduitComponent } from './components/detail-produit/detail-produit.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { RegisterMedecinComponent } from './components/register-medecin/register-medecin.component';
import { SearchMedecinComponent } from './components/search-medecin/search-medecin.component';

const routes: Routes = [
  {path: 'register-medecin' , component: RegisterMedecinComponent },
  {path: 'search-medecin' , component: SearchMedecinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
