import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  public parameters: Parameter[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Parameter[]>(baseUrl + 'parameter').subscribe(result => {
      this.parameters = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}

interface Parameter {
  id: number;
  name: string;
  description: string;
}
