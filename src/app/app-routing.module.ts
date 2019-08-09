import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';

/*CON ESTA CONSTANTE ESPECIFICAMOS COMO VAN A FUNCIONAR LAS RUTAS*/
const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },//CUANDO EN LA BARRA DE NAVEGACIÓN APAREZCA SOLO localhost:4200 ENTONCES REDICCIONARÁ AL PortafolioComponent
    { path: 'about', component: AboutComponent },
    { path: 'product', component: ProductComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' } //EN CASO DE ESCRIBIR UNA RUTA QUE NO EXISTA VA A DIRIGIR A LA RUTA DEL PortafolioComponent
];

@NgModule({
    imports: [ //SE USA EL imports PORQUE ES EL QUE USA CON LOS MODULOS
        RouterModule.forRoot(app_routes, { useHash: true }) //EL useHash ES PARA DECIRLE AL NAVEGADOR QUE LAS RUTAS SON PARTE DEL ARCHIVO INDEX Y NO UNA CARPETA
    ],
    exports: [
        RouterModule //TENEMOS QUE EXPORTARLO PARA PODER USARLO FUERA DE ESTE COMPONENTE
    ]
})

export class AppRoutingModule { }