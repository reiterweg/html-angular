import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';
import { WorkTeam } from '../interfaces/work-team.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  infoPage: InfoPage = {};
  workTeam: WorkTeam[] = [];
  loaded = false;

  constructor(private _http: HttpClient) {
    this.loadInfoPage();
    this.loadWorkTeam();
  }

  private loadInfoPage() {
    this._http.get('assets/data/data-page.json')
      .subscribe((response: InfoPage) => {
        this.loaded = true;
        this.infoPage = response;
      });
  }

  private loadWorkTeam() {
    this._http.get('https://html-angular-18097.firebaseio.com/work_team.json')
      .subscribe((response: WorkTeam[]) => {
        this.workTeam = response;
      });
  }
}
