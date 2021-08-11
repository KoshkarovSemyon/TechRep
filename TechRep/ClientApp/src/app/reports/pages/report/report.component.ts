import { Component, OnInit } from '@angular/core';

interface SourceNode {
  id: string;
  name: string;
  qty?: Number;
  Zn?: Number;
  Cd?: Number;
  Cu?: Number;
  Pb?: Number;
  Au?: Number;
  Ag?: Number;
  S?: Number;
  _qty?: Number;
  _Zn?: Number;
  _Cd?: Number;
  _Cu?: Number;
  _Pb?: Number;
  _Au?: Number;
  _Ag?: Number;
  _S?: Number;
}

const DATA2: SourceNode[] = [
  {
    id: '1',
    name: 'В продукты обжига: план',
    qty: 33917, Zn: 16771, Cd: 94810, Pb: 282.6, Cu: 580.4, Au: 39.6, Ag: 3338.1, S: 11041,
    _qty: 33917, _Zn: 16771, _Cd: 94810, _Pb: 282.6, _Cu: 580.4, _Au: 39.6, _Ag: 3338.1, _S: 11041
  },
  {
    id: '2',
    name: 'В продукты обжига: факт',
    qty: 468, Zn: 408,
    _qty: 468, _Zn: 408
  },
  {
    id: '3',
    name: 'Серы в газы для СКЦ',
    qty: 97, Zn: 38, Cd: 233, Pb: 0.7, Cu: 3.8, Au: 0.6, Ag: 133.9,
    _qty: 97, _Zn: 38, _Cd: 233, _Pb: 0.7, _Cu: 3.8, _Au: 0.6, _Ag: 133.9
  },
  {
    id: '4',
    name: 'В загрязненные стоки',
    qty: 64, Zn: 5, Cd: 250,
    _qty: 64, _Zn: 5, _Cd: 250
  },
  {
    id: '5',
    name: 'В потери',
    qty: 59, Zn: 39,
    _qty: 59, _Zn: 39
  },
  {
    id: '6',
    name: 'в т.ч. с газами после электрофильтров',
    S: 5,
    _S: 5
  },
  {
    id: '7',
    name: 'в т.ч. при транспортировке',
    Zn: -16, Cd: -98, Pb: 0.5, Cu: 0.3, Ag: 2.2,
    _Zn: -16, _Cd: -98, _Pb: 0.5, _Cu: 0.3, _Ag: 2.2
  }
  ,
  {
    id: '8',
    name: 'Невязка баланса',
    qty: 34605, Zn: 17277, Cd: 95931, Pb: 282.8, Cu: 583.9, Au: 40.2, Ag: 3469.8, S: 11046,
    _qty: 34605, _Zn: 17277, _Cd: 95931, _Pb: 282.8, _Cu: 583.9, _Au: 40.2, _Ag: 3469.8, _S: 11046
  },
  {
    id: '9',
    name: 'Итого',
    qty: 34605, Zn: 17277, Cd: 95931, Pb: 282.8, Cu: 583.9, Au: 40.2, Ag: 3469.8, S: 11046,
    _qty: 34605, _Zn: 17277, _Cd: 95931, _Pb: 282.8, _Cu: 583.9, _Au: 40.2, _Ag: 3469.8, _S: 11046
  }
]

const DATA1: SourceNode[] = [
  {
    id: '1',
    name: 'Огарок',
    qty: 33917, Zn: 16771, Cd: 94810, Pb: 282.6, Cu: 580.4, Au: 39.6, Ag: 3338.1, S: 11041,
    _qty: 33917, _Zn: 16771, _Cd: 94810, _Pb: 282.6, _Cu: 580.4, _Au: 39.6, _Ag: 3338.1, _S: 11041
  },
  {
    id: '2',
    name: 'Пыль печей КС',
    qty: 468, Zn: 408,
    _qty: 468, _Zn: 408
  },
  {
    id: '3',
    name: 'Пыль электрофильтров',
    qty: 97, Zn: 38, Cd: 233, Pb: 0.7, Cu: 3.8, Au: 0.6, Ag: 133.9,
    _qty: 97, _Zn: 38, _Cd: 233, _Pb: 0.7, _Cu: 3.8, _Au: 0.6, _Ag: 133.9
  },
  {
    id: '4',
    name: 'Всего продуктов обжига',
    qty: 64, Zn: 5, Cd: 250,
    _qty: 64, _Zn: 5, _Cd: 250
  },
  {
    id: '5',
    name: 'Серы в газах для СКЦ',
    qty: 59, Zn: 39,
    _qty: 59, _Zn: 39
  },
  {
    id: '6',
    name: 'Загрязненные стоки',
    S: 5,
    _S: 5
  },
  {
    id: '7',
    name: 'Потери общие',
    Zn: -16, Cd: -98, Pb: 0.5, Cu: 0.3, Ag: 2.2,
    _Zn: -16, _Cd: -98, _Pb: 0.5, _Cu: 0.3, _Ag: 2.2
  }
  ,
  {
    id: '8',
    name: 'В т.ч. с газами после электрофильтров',
    qty: 34605, Zn: 17277, Cd: 95931, Pb: 282.8, Cu: 583.9, Au: 40.2, Ag: 3469.8, S: 11046,
    _qty: 34605, _Zn: 17277, _Cd: 95931, _Pb: 282.8, _Cu: 583.9, _Au: 40.2, _Ag: 3469.8, _S: 11046
  },
  {
    id: '9',
    name: 'В т.ч. при транспортировке',
    qty: 34605, Zn: 17277, Cd: 95931, Pb: 282.8, Cu: 583.9, Au: 40.2, Ag: 3469.8, S: 11046,
    _qty: 34605, _Zn: 17277, _Cd: 95931, _Pb: 282.8, _Cu: 583.9, _Au: 40.2, _Ag: 3469.8, _S: 11046
  },
  {
    id: '10',
    name: 'Невязка баланса',
    qty: 34605, Zn: 17277, Cd: 95931, Pb: 282.8, Cu: 583.9, Au: 40.2, Ag: 3469.8, S: 11046,
    _qty: 34605, _Zn: 17277, _Cd: 95931, _Pb: 282.8, _Cu: 583.9, _Au: 40.2, _Ag: 3469.8, _S: 11046
  },
  {
    id: '11',
    name: 'Итого получено',
    qty: 34605, Zn: 17277, Cd: 95931, Pb: 282.8, Cu: 583.9, Au: 40.2, Ag: 3469.8, S: 11046,
    _qty: 34605, _Zn: 17277, _Cd: 95931, _Pb: 282.8, _Cu: 583.9, _Au: 40.2, _Ag: 3469.8, _S: 11046
  }
]

const DATA: SourceNode[] = [
  {
    id: '1',
    name: 'Всего концентратов',
    qty: 33917, Zn: 16771, Cd: 94810, Pb: 282.6, Cu: 580.4, Au: 39.6, Ag: 3338.1, S: 11041,
    _qty: 33917, _Zn: 16771, _Cd: 94810, _Pb: 282.6, _Cu: 580.4, _Au: 39.6, _Ag: 3338.1, _S: 11041
  },
  {
    id: '2',
    name: 'Дросс КЭЦ ПО',
    qty: 468, Zn: 408,
    _qty: 468, _Zn: 408
  },
  {
    id: '3',
    name: 'Флотоконцентрат',
    qty: 97, Zn: 38, Cd: 233, Pb: 0.7, Cu: 3.8, Au: 0.6, Ag: 133.9,
    _qty: 97, _Zn: 38, _Cd: 233, _Pb: 0.7, _Cu: 3.8, _Au: 0.6, _Ag: 133.9
  },
  {
    id: '4',
    name: 'Шлам очистных сооружений',
    qty: 64, Zn: 5, Cd: 250,
    _qty: 64, _Zn: 5, _Cd: 250
  },
  {
    id: '5',
    name: 'Цинкосодержащее сырье',
    qty: 59, Zn: 39,
    _qty: 59, _Zn: 39
  },
  {
    id: '6',
    name: 'Элементарная сера',
    S: 5,
    _S: 5
  },
  {
    id: '7',
    name: 'Изменение НЗП',
    Zn: -16, Cd: -98, Pb: 0.5, Cu: 0.3, Ag: 2.2,
    _Zn: -16, _Cd: -98, _Pb: 0.5, _Cu: 0.3, _Ag: 2.2
  }
  ,
  {
    id: '8',
    name: 'Всего в загрузке',
    qty: 34605, Zn: 17277, Cd: 95931, Pb: 282.8, Cu: 583.9, Au: 40.2, Ag: 3469.8, S: 11046,
    _qty: 34605, _Zn: 17277, _Cd: 95931, _Pb: 282.8, _Cu: 583.9, _Au: 40.2, _Ag: 3469.8, _S: 11046
  }
]


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  data: any[] = [];
  data1: any[] = [];
  data2: any[] = [];

  constructor() {
    this.data = DATA;
    this.data1 = DATA1;
    this.data2 = DATA2;
  }

  ngOnInit() {
  }

}
