import { Akoma } from './akoma';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BasexService {

  constructor(private http: Http) { }

  getDocumentById(): Promise<Akoma[]> {
    return null
//    return this.http.get(this.heroesUrl)
//               .toPromise()
//               .then(response => response.json().data as Hero[])
//               .catch(this.handleError);
  }
}
