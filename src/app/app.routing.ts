import { Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ProductoComponent } from "./producto/producto.component";
import { HomeComponent } from "./home/home.component";
import { ListadeproductosComponent } from "./listadeproductos/listadeproductos.component";
import { MapaComponent } from "./mapa/mapa.component";


const APP_ROUTES: Routes = [
	{ path: '' , component: HomeComponent },
	{ path: 'producto', component: ProductoComponent },
	{ path: 'listadeproductos', component: ListadeproductosComponent },
	{ path: 'mapa', component: MapaComponent }
	];

export const routing = RouterModule.forRoot(APP_ROUTES);