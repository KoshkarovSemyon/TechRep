import { Component, OnInit } from '@angular/core';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { DatePipe } from '@angular/common';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface SourceNode {
  id: string;
  name: string;
  last_edit_at?: Date;
  last_edit_by?: string;
  status?: Number;
  path?: string;
  children?: SourceNode[];
}
const TREE_DATA: SourceNode[] = [
  {
    id: '1',
    name: 'Обжиговый цех',
    last_edit_by: 'Иванов А.А.',
    last_edit_at: new Date(),
    children: [
      { id: '2', name: 'Цеховая таблица анализов', last_edit_by: 'Иванов А.А.', last_edit_at: new Date(), status: 1, path: '' },
      { id: '2', name: 'Справка бюро сырья и материалов СТК о расходе сырья ', last_edit_by: 'Иванов А.А.', last_edit_at: new Date(), status: 1, path: '' },
      { id: '2', name: 'Справка КЭЦ по количеству дросса плавильного отделения', last_edit_by: 'Иванов А.А.', last_edit_at: new Date(), status: 1, path: '' },
      { id: '2', name: 'Справка ПО по количеству переданного шлама очистных сооружений', last_edit_by: 'Иванов А.А.', last_edit_at: new Date(), status: 1, path: '' },
      { id: '2', name: 'Количество серы для розжига печей', last_edit_by: 'Иванов А.А.', last_edit_at: new Date(), status: 1, path: '' }
    ]
  }, {
    id: '3',
    name: 'Вельц цех',
    last_edit_by: 'Петров А.А.',
    last_edit_at: new Date(),
    children: [
      {
        id: '4',
        name: 'Старый цех',
        children: [
          { id: '6', name: 'Справка ГМЦ по количеству переданных материалов', last_edit_by: 'Петров А.А.', last_edit_at: new Date(), status: 1, path: '' },
          { id: '6', name: 'Справка КЭЦ по количеству переданных материалов', last_edit_by: 'Петров А.А.', last_edit_at: new Date(), status: 1, path: '' },
          { id: '6', name: 'Справка ВыщЦ по количеству переданных материалов', last_edit_by: 'Петров А.А.', last_edit_at: new Date(), status: 1, path: '' },
        ]
      }, {
        id: '5',
        name: 'Новый цех',
        last_edit_by: 'Сидоров А.А.',
        last_edit_at: new Date(),
        children: [
          { id: '7', name: 'Справка ГМЦ по количеству переданных материалов', last_edit_by: 'Сидоров А.А.', last_edit_at: new Date(), status: 1, path: '' },
          { id: '7', name: 'Справка КЭЦ по количеству переданных материалов', last_edit_by: 'Сидоров А.А.', last_edit_at: new Date(), status: 1, path: '' },
          { id: '7', name: 'Справка ВыщЦ по количеству переданных материалов', last_edit_by: 'Сидоров А.А.', last_edit_at: new Date(), status: 1, path: '' },
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {

  datepipe: DatePipe = new DatePipe('en-US');

  treeControl = new NestedTreeControl<SourceNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<SourceNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: SourceNode) => !!node.children && node.children.length > 0;

  ngOnInit() {
  }

}
