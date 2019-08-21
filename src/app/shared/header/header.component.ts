import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infopaginaservices: InfoPaginaService, private router: Router) { // EL router ES PARA PODER NAVEGAR DE FORMA AUTOMATICA DESDE EL COMPONENTE A LA PÁGINA, ES
                                                                                      // DECIR CUANDO LA PERSONA PRESIONE ENTER

  }

  ngOnInit() {
  }

  searchProduct(termino: string) {
    if (termino.length < 1) {
      return;
    }

    // NAVEGACION
    this.router.navigate(['/search', termino]); // search ES LA PÁGINA Y termino ES EL PARÁMETRO QUE LE PASAMOS
  }

}
