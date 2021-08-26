import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { HeaderData } from '../../../shared/models/header-data'

@Injectable({
  providedIn: 'root'
})
export class HeaderDataService {

  constructor() { }

  public header$ = new Subject<string>();
  public headerData$ = new Subject<HeaderData>();

  public changeHeader(header: string) {
    this.header$.next(header);
  }

  public changeHeaderData(headerData: HeaderData) {
    this.headerData$.next(headerData);
  }
}
