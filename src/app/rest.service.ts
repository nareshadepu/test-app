import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dummyData } from './user-table/table';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http: HttpClient) { }

  getUserData() {
    return this._http.get<dummyData[]>('https://raw.githubusercontent.com/nareshadepu/mock-data/main/mock-data.json');
  }

  getData(data: any) {
    return this._http.post(('https://stgcrmprd.mercator.com/webapi.wyuat/api/Global/Search'), data);
  }
}
