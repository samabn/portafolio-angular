import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductosDescriptionInterface } from 'src/app/interfaces/prduct-description.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: ProductosDescriptionInterface; // ESTA PROPIEDAD ES DE ESTE TIPO PORQUE EN LA INTERFACE TENEMOS TODA LA DESCRIPCION DEL OBJETO PRODUCTO, PERO SI LA DEJAMOS ASÍ
                                          // SIN INICIALIZAR MARCA ERROR PORQUE LA MISMA ES UNDEFINED
  id: string;

  constructor(private activatedroute: ActivatedRoute, public productservice: ProductosService) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(parametros => { // EL subscribe ESTA PENDIENTE DE TODOS LOS CAMBIOS EN LOS PARÁMETROS DE LA URL
      console.log(parametros['id']); // LEEMOS LOS PARAMETROS QUE SE RECIBEN POR URL
      // MANDAMOS A LLAMAR EL MÉTODO QUE OBTIENE LOS DATOS DEL PRODUCTO
      this.productservice.getProduct(parametros['id']).subscribe((product: ProductosDescriptionInterface) => {
        
        this.id = parametros['id'];
        this.product = product;
      });
    });
  }

}
