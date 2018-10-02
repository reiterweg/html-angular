import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product: Product;
  id: string;

  constructor(private _route: ActivatedRoute,
    public _productService: ProductService) { }

  ngOnInit() {
    this._route.params
      .subscribe(params => {
        this._productService.getProduct(params['id'])
          .subscribe((response: Product) => {
            this.id = params['id'];
            this.product = response;
          });
      });
  }
    
}
