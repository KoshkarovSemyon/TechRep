import { Component, OnInit } from '@angular/core';
import { HeaderDataService } from '../../services/header-data/header-data.service'

import { HeaderData } from '../../models/header-data'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header: string;
  headerData: HeaderData = new HeaderData();

  constructor(
    private readonly headerDataSvc: HeaderDataService) { }

  /*public setHeader(): void {
    this.headerInfoSvc.changeHeader('Test header!');*/

  ngOnInit(): void {
    this.headerDataSvc.header$.subscribe((header) => {
      //this.log(header);
      this.header = header;
    });

    this.headerDataSvc.headerData$.subscribe((headerData) => {
      //this.log(headerData);
      this.headerData = headerData;
      //this.headerData.title = headerData.getTitle();
    });
    }

  private log(data: any): void {
    console.log(data);
    }
}
