import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './components/produits/produits.component';


import { ProduitComponent } from './components/produit/produit.component';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination'; //Imports NgxPaginationModule 
import { DetailProduitComponent } from './components/detail-produit/detail-produit.component';
import { HeaderComponent } from './components/header/header.component';

import { SearchMedecinComponent } from './components/search-medecin/search-medecin.component';
import { ShowMedecinComponent } from './components/show-medecin/show-medecin.component';
import { RegisterMedecinComponent } from './components/register-medecin/register-medecin.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    ProduitComponent,
    DetailProduitComponent,
    HeaderComponent,
    SearchMedecinComponent,
    ShowMedecinComponent,
    RegisterMedecinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
