import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { ProductsComponent } from './components/products/products.component';

export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('https://127.0.0.1:8000/ws');
  RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'});
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestangularModule.forRoot(RestangularConfigFactory),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
