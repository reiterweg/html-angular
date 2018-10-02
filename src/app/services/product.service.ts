import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductIdx } from '../interfaces/product-idx.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  loading = true;
  productsIdx: ProductIdx[];

  constructor(private _http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this._http.get('https://html-angular-18097.firebaseio.com/products_idx.json')
      .subscribe((response: ProductIdx[]) => {
        this.productsIdx = response;
        this.loading = false;
      });
  }

  getProduct(id: string) {
    return this._http.get(`https://html-angular-18097.firebaseio.com/products/${ id }.json`);
  }
}
