import { Injectable } from '@angular/core';

@Injectable()
export class FooterData {

  public user: string;

  constructor() { }

  public setUser(param) {
    this.user = param;
  }

  public getUser() {
    return this.user;
  }
}
