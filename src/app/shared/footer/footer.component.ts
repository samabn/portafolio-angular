import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anho: number = new Date().getFullYear();//ESTA VARIABLE SE USA EN EL footer.component.html PARA QUE EL AÑO SE MUESTRE DE MANERA DINAMICA.

  constructor() { }

  ngOnInit() {
  }

}
