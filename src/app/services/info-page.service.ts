import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  infoPage: InfoPage = {};
  loaded = false;

  constructor(private _http: HttpClient) {
    this._http.get('assets/data/data-page.json')
      .subscribe((response: InfoPage) => {
        this.loaded = true;
        this.infoPage = response;
      });
  }
}
