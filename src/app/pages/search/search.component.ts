import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
              public _productService: ProductService) { }

  ngOnInit() {
    this._route.params
      .subscribe(params => {
        this._productService.searchProduct(params['keyword']);
      });
  }
}
