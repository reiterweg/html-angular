import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductIdx } from '../interfaces/product-idx.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  loading = true;
  productsIdx: ProductIdx[] = [];
  filteredProductsIdx: ProductIdx[];

  constructor(private _http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    return new Promise((resolve, reject) => {
      this._http.get('https://html-angular-18097.firebaseio.com/products_idx.json')
      .subscribe((response: ProductIdx[]) => {
        this.productsIdx = response;
        this.loading = false;
        resolve();
      });
    });
  }

  getProduct(id: string) {
    return this._http.get(`https://html-angular-18097.firebaseio.com/products/${ id }.json`);
  }

  searchProduct(keyword: string) {
    if (this.productsIdx.length === 0) {
      this.loadProducts().then(() => {
        this.filterProducts(keyword);
      });
    } else {
      this.filterProducts(keyword);
    }
  }

  private filterProducts(keyword: string) {
    this.filteredProductsIdx = [];
    keyword = keyword.toLocaleLowerCase();

    this.productsIdx.forEach(productIdx => {
      const lowerTitle = productIdx.title.toLocaleLowerCase();

      if (productIdx.category.indexOf(keyword) >= 0
        || lowerTitle.indexOf(keyword) >= 0) {
        this.filteredProductsIdx.push(productIdx);
      }
    });
  }
}
