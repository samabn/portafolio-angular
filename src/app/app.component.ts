import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public infoPaginaService: InfoPaginaService) {//ESTA LINEA ES PARA PODER USAR EL CONSTRUCTOR DEL SERVICIO infoPagina, SE ESTÁ INYECTANDO.
  }
}
