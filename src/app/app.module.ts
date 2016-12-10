          import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductoComponent } from './producto/producto.component';
import { HomeComponent } from './home/home.component';

import { routing } from "./app.routing";
import { ListadeproductosComponent } from './listadeproductos/listadeproductos.component';
import { MapaComponent } from './mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductoComponent,
    HomeComponent,
    ListadeproductosComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
