import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-sources',
  templateUrl: './data-sources.component.html',
  styleUrls: ['./data-sources.component.css']
})
export class DataSourcesComponent implements OnInit {

  public datasources: DataSource[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<DataSource[]>(baseUrl + 'datasource').subscribe(result => {
      this.datasources = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}

interface DataSource {
  id: number;
  name: string;
  description: string;
}
