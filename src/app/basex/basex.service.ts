import { Akoma }      from './akoma';
import { Injectable } from '@angular/core';
import { Http,
         Headers,
         RequestOptions,
         Response,
         Jsonp,
         URLSearchParams } from '@angular/http';
import { environment }     from "../../environments/environment";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BasexService {
  private prawoUrl = environment.basexUrl + '/rest';
  private res

  constructor(private http: Http) { }

  getDocumentById(db: string, year: string, pos: string): Observable<Akoma> {
    let params = new URLSearchParams();
    params.set('method', 'json');
    params.set('json=format', 'jsonml');

    let headers = new Headers();
    headers.set('Content-Type', 'text/plain');

    let options = new RequestOptions();
    options.search = params;
    options.headers = headers;

    return this.http.get(this.prawoUrl + '/' + db + '/' + year + '/' + pos, options)
                    .map(this.extractData)
                    .catch(this.handleError);

  }

  private extractData(res: Response) {
    let body = res.json();
    return new Akoma(body);
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
