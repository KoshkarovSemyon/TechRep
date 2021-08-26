import { Injectable } from '@angular/core';

@Injectable()
export class Parameter {

  public id: number;
  public name: string;
  public desc: string;
  public path: string;
  public dependencies: Parameter[];

  constructor() { }

  // #region get/set

  public setParameter(param: Parameter) {
    this.id = param.id;
  }

  public getParameter() {
    return this;
  }
  // #endregion
}
