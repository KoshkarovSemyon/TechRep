import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParameterService } from '../../../shared/services/parameter/parameter.service'
import { Parameter } from '../../../shared/models/parameter'

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  public parameters: Parameter[];

  constructor(private readonly prmSvc: ParameterService, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    prmSvc.getParametersByDep([ 1, 2, 3]).subscribe(x => { console.log(x) },
      error => console.error(error));
    //http.get<Parameter[]>(baseUrl + 'parameter').subscribe(result => {
    //  this.parameters = result;
    //}, error => console.error(error));
  }

  ngOnInit() {

  }

}

/*interface Parameter {
  id: number;
  name: string;
  description: string;
}*/
