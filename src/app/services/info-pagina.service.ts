import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({//ESTE DECORADO INDICA QUE ESTE SERVICIO SE PUEDE INYECTAR 
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  // tslint:disable-next-line: variable-name
  _dataTeam: any = {};
  cargada = false;

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient) {// ESTE ES EL LUGAR IDEAL PARA MANDAR A LLAMAR AL OBJETO JSON. EL SERIVICIO http ES PARA HACER PETICIONES A SERVIDOR EXTERNOS, REST, ETC.
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    // LEER EL ARCHIVO JSON
    // tslint:disable-next-line: max-line-length
    this.http.get('./assets/data/data-pagina.json').subscribe((resp: InfoPagina) => {// EL subscribe ES PARA QUE EJECUTE LA INFORMACIÓN DEL ARCHIVO JSON
      this.cargada = true; // ESTA VARIABLE NOS VA A INDICAR CUANDO LA INFORMACIÓN YA ESTÉ CARGADA
      this.info = resp;
    });
  }

  private loadTeam() {
    this.http.get('https://portafolio-angular-b3505.firebaseio.com/team.json').subscribe((resp) => {
      this._dataTeam = resp;
    });
  }
}
