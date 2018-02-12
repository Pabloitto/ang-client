import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
const BASE_URL = 'https://ang-backend.herokuapp.com/'
@Injectable()
export class BaseService {
  constructor(private _http: Http) { }
  doPost (path: string, data: any) {
    return this._http.post(BASE_URL + path, data)
        .map(response => {
          console.log(response)
          return response.json()
        })
        .toPromise()
        .catch(error => error.json())
  }
}
