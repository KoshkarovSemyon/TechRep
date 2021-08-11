import { Component, Inject, OnInit } from '@angular/core';

interface SourceNode {
  id: string;
  name: string;
  Zn?: Number;
  Cd?: Number;
  Cu?: Number;
  Pb?: Number;
  Au?: Number;
  Ag?: Number;
}

const DATA: SourceNode[] = [
  {
    id: '546',
    name: 'Пульпа реактора очистки TK - 502 A/B/C/D, фильтрат',
    Zn: 133, Cd: 0.09, Cu: 0.0001
  },
  {
    id: '547',
    name: 'Раствор сборников TK-510 A/B (ВСНС), фильтрат',
    Zn: 129.4, Cd: 0.7, Cu: 0.3
  },
    {
    id: '562',
    name: 'Раствор крисстализаторов TK-701 A/B, фильтрат',
    Zn: 141.0, Cd: 0.0001, Cu: 0.007
  },
  {
    id: '563',
    name: 'Раствор сборников TK-702 A/B, фильтрат',
    Zn: 141.5, Cd: 0.0001, Cu: 0.006
  },
  {
    id: '550',
    name: 'Пульпа реактора TK-601, твердое',
    Zn: 42.0, Cd: 12.1, Cu: 11.9, Pb: 0.6, Au: 0.25, Ag: 16
  },
  {
    id: '550',
    name: 'Пульпа реактора TK-601, фильтрат',
    Zn: 76.9, Cd: 2.2, Cu: 0.0003
  }
]

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  data: any[] = [];

  constructor() {
    this.data = DATA;
  }

  ngOnInit() {
  }

}
