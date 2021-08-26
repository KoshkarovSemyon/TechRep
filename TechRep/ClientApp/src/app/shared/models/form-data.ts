import { Injectable } from '@angular/core';

@Injectable()
export class FormData {

  public id: string;
  public name: string;
  public desc: string;
  public department: string;

  constructor() { }

  // #region get/set

  public setForm(param: FormData) {
    this.id = param.id;
  }

  public getForm() {
    return this;
  }
  // #endregion
}
