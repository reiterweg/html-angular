import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _infoPageService: InfoPageService,
              public _router: Router) { }

  ngOnInit() {
  }

  searchProduct(keyword: string) {
    if (keyword.length < 1) {
      return;
    }

    this._router.navigate(['/search', keyword]);
  }
}
