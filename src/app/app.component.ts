import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line: max-line-length
  // ESTA LINEA ES PARA PODER USAR EL CONSTRUCTOR DEL SERVICIO infoPagina, SE ESTÁ INYECTANDO, ASÍ COMO TAMBIEN EL productosservice, AY QUE AL CARGAR LA PÁGINA ESTA CLASE
  // OBTENDRÁ LOS DATOS DE FIREBASE.
  constructor(public infoPaginaService: InfoPaginaService, public productosservices: ProductosService) { 
  }
}
