import { Injectable, Inject} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

import { FormData } from '../../../shared/models/form-data'

@Injectable({
  providedIn: 'root'
})
export class FormService {

  url: string;
  svc: HttpClient;

  public form$ = new Subject<FormData>();
  public forms$ = new Subject<FormData[]>();

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
    this.svc = http;

    this.getForms();
  }

  public getForms() {
    let forms: FormData[] = [];

    this.svc.get<FormData[]>(this.url + 'Form').subscribe(result => {
      //Object.values(result).forEach((x) => {
        //forms.push(<FormData>x);
      //});
      this.forms$.next(result);
    }, error => {
      console.error(error);
    });
  }

  /*public changeHeaderData(headerData: HeaderData) {
    this.headerData$.next(headerData);
  }*/
}
