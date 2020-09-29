import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Album } from './album';
import { Product } from './product';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
   return this._http.get(this._albumUrl).map(response => this._albumUrl = response.json<Album>());
  }

  getProducts(): Observable<Product[]> {
    return this._http.get(_productsUrl).map(response => this._productsUrl = response.json<Product[]>());
  }
}
