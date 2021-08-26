import { Injectable } from '@angular/core';

@Injectable()
export class HeaderData {

  public title: string;
  public alarms: string[];
  public activities: string[];

  constructor() { }

  public setTitle(param) {
    this.title = param;
  }

  public getTitle() {
    return this.title;
  }
}
