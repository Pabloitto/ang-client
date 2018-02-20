import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';

const BASE_URL = 'http://localhost:8085/'

@Injectable()
export class BaseService {
  constructor(private _http: Http) { }
  doPost (path, body = null) {
    const url = `${BASE_URL}${path}`
    return this._http.post(url, body).map(function(response){
        return response.json()
    }).toPromise()
    .catch(function(err) {return err.json()})
  }
  doPatch (path, body = null) {
    const url = `${BASE_URL}${path}`
    return this._http.patch(url, body).map(function(response){
        return response.json()
    }).toPromise()
    .catch(function(err) {return err.json()})
  }
  doDelete (path) {
    const url = `${BASE_URL}${path}`
    return this._http.delete(url).map(function(response){
        return response.json()
    }).toPromise()
    .catch(function(err) {return err.json()})
  }
  doGet(path) {
    const url = `${BASE_URL}${path}`
    return this._http.get(url).map(function(response){
        return response.json()
    }).toPromise()
    .catch(function(err) {return err.json()})
  }
}
