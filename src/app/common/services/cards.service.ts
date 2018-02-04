import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BASE_URL_TOKEN } from '../../config';

@Injectable()
export class CardsService {

  public constructor(
    private _http: HttpClient,
    @Inject(BASE_URL_TOKEN) private _baseUrl: string
  ) { }

  public get cards$(): Observable<Card[]> {
    return this._http.get<Card[]>(this._baseUrl);
  }
}
