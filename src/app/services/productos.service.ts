import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosInterface } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  products: ProductosInterface[] = [];

  constructor( private http: HttpClient) {
    this.loadProducts(); // CUANDO LA CLASE SEA LLAMADA CARGARÁ LOS PRODUCTOS
  }

  private loadProducts() {
      this.http.get('https://portafolio-angular-b3505.firebaseio.com/productos_idx.json').subscribe((resp: ProductosInterface[]) => {
        console.log(resp);
        this.products = resp;
        this.loading = false;
      });
  }
}
