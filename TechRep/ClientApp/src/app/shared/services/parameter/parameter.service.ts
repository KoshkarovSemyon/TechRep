import { Injectable, Inject} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, from, mergeMap, Observable } from 'rxjs';
import { Parameter } from '../../../shared/models/parameter'

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  url: string;
  svc: HttpClient;
  parameters: Parameter[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
    this.svc = http;
  }

  getParametersByDep(deps: number[]): Observable<any[]> {
    let ret : any[] = [];
    from(deps/*[
      { id: 1, name: 'Mustermann' },
      { id: 2, name: 'Hans Dampf' },
      { id: 3, name: 'Pleite AG' }
    ]*/).pipe(
      mergeMap(dep => this.loadKeyfigures(dep))
    ).subscribe(result => {
      //ret.concat(result);
      //console.log(result);
      return Observable.create(observer => { observer.next(ret); });
    });
    return Observable.create(observer => { observer.next(ret); });
  }

  loadKeyfigures(id: number): Observable<any[]> {

    // EDIT: This is a http call in "real life"

    /*const keyFigures = [];
    keyFigures.push({ clientId: 1, name: 'A', value: 23 });
    keyFigures.push({ clientId: 1, name: 'B', value: 22 });
    keyFigures.push({ clientId: 2, name: 'A', value: 12 });
    keyFigures.push({ clientId: 3, name: 'A', value: 312 });
    keyFigures.push({ clientId: 3, name: 'B', value: 12333 });
    keyFigures.push({ clientId: 3, name: 'C', value: 4567 });
    keyFigures.push({ clientId: 3, name: 'D', value: 54 });
    keyFigures.push({ clientId: 4, name: 'A', value: 5672 });
    keyFigures.push({ clientId: 5, name: 'A', value: 243 });
    keyFigures.push({ clientId: 6, name: 'A', value: 334 });

    // Use from to convert array to a stream
    return from(keyFigures.filter(fig =>
      fig.clientId === clientId
    ));*/

    let res: any[] = [];
    this.svc.get<Parameter[]>(this.url + 'parameter').subscribe(result => {
      //console.log(result);
      //console.log(id);
      //res = result;

      //this.parameters = result;
      res.push(result.filter(prm =>
        prm.id == id
      ));
      console.log(res);
      return Observable.create(observer => { observer.next(res); });
    }, error => console.error(error));

    //console.log(res);
    return from(res);
    /*console.log(this.parameters);
    return from(this.parameters.filter(prm =>
      prm.id === id
    ));*/
  }
}
