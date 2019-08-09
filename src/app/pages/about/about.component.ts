import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  /* SE INYECTA EL SERVICION EN EL CONSTRUCTOR */
  constructor(public _ips: InfoPaginaService) { }

  ngOnInit() {
  }

}
