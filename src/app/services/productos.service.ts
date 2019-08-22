import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosInterface } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  products: ProductosInterface[] = [];
  productfiltrado: ProductosInterface[] = [];

  constructor( private http: HttpClient) {
    this.loadProducts(); // CUANDO LA CLASE SEA LLAMADA CARGARÁ LOS PRODUCTOS
  }

  private loadProducts() {

    /* PROMESAS DE ES 6, ESTAS SON ASINCRONAS */
    return new Promise((resolve, reject) => {
      this.http.get('https://portafolio-angular-b3505.firebaseio.com/productos_idx.json').subscribe((resp: ProductosInterface[]) => {
        this.products = resp;
        this.loading = false;
        resolve(); // CUANDO SE SEJECUTA ESTE MÉTODO ES PORQUE LA PROMESA TERMINO DE MANERA CORRECTA
      });
    });
  }

  getProduct(id: string) { // ESTE MÉTODO DEVUELVE LOS DATOS DEL PRODUCTO, ESTO LOS OBTIENE MEDIANTE EL id DEL MISMO
    return this.http.get(`https://portafolio-angular-b3505.firebaseio.com/productos/${ id }.json`);
  }

  /* ESTE MÉTODO SE DISPARA ANTES DE LA CARGA DE LOS PRODUCTOS */
  searchProduct(termino: string) {
    if (this.products.length === 0) {
      // ESPERAR A QUE SE CARGUEN LOS PRODUCTOS
      this.loadProducts().then(() => { // EL then() ES PARA EJECUTAR UN CÓDIGO DESPUES QUE LA PROMESA TERMINE
        this.filterProducts(termino);
      });
    } else {
      this.filterProducts(termino);
    }
  }

  private filterProducts(termino: string) {
    this.productfiltrado = []; // ESTO ES PARA PURGAR EL ARREGLO, BORRAR LOS ELEMENTOS QUE ESTE PUEDA TENER DE UNA BUSQUEDA ANTERIOR
    /* EL MÉTODO filter BARRE EL ARREGLO Y REGRESA UNO NUEVO */
    /*this.productfiltrado = this.products.filter(product => {
      return true; // CON ESTO LE DECIMOS QUE NOS VA AREGRESAR TODOS LOS PRODUCTOS
    });
    console.log(this.productfiltrado);*/
    termino = termino.toLocaleLowerCase();
    this.products.forEach(prod => {
      const tiulolower = prod.titulo.toLocaleLowerCase();
      if((prod.categoria.indexOf(termino) >= 0) || (tiulolower.indexOf(termino) >= 0)) { // SE FILTRA POR TITULO Y POR CATEGORIA
        this.productfiltrado.push(prod);
      }
    });
  }
}
