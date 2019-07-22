import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator } from '@angular/material';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'table-expandable-rows-example',
  styleUrls: ['table-expandable-rows-example.css'],
  templateUrl: 'table-expandable-rows-example.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableExpandableRowsExample implements OnInit {
  dataSource = new MatTableDataSource(INPUT_DATA);
  columnsToDisplay = ['name', 'gender', 'company', 'email'];
  expandedElement: User | null;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

export interface User {
  id: string;
  name: string;
  gender: string;
  company: string;
  email: string;
}

const INPUT_DATA: User[] = [
  {
    "id": "5d2c8549116acb1d6fc7104a",
    "name": "Castillo Barnes",
    "gender": "male",
    "company": "ZENTILITY",
    "email": "castillobarnes@zentility.com"
  },
  {
    "id": "5d2c8549b74cbcc7f9099dc9",
    "name": "Tabatha Adams",
    "gender": "female",
    "company": "APEX",
    "email": "tabathaadams@apex.com"
  },
  {
    "id": "5d2c8549680c5d25ac52d9d5",
    "name": "Estrada Blake",
    "gender": "male",
    "company": "SONGBIRD",
    "email": "estradablake@songbird.com"
  },
  {
    "id": "5d2c85492c11dfc3aa6c4065",
    "name": "Patterson Salinas",
    "gender": "male",
    "company": "CODACT",
    "email": "pattersonsalinas@codact.com"
  },
  {
    "id": "5d2c8549492ab8feb572bfd8",
    "name": "Rhodes Goodwin",
    "gender": "male",
    "company": "EWEVILLE",
    "email": "rhodesgoodwin@eweville.com"
  },
  {
    "id": "5d2c854900da46a3ba6236f8",
    "name": "Katharine Lindsay",
    "gender": "female",
    "company": "QUIZKA",
    "email": "katharinelindsay@quizka.com"
  },
  {
    "id": "5d2c8549e0d8784e52edf29d",
    "name": "Maude Bright",
    "gender": "female",
    "company": "JIMBIES",
    "email": "maudebright@jimbies.com"
  },
  {
    "id": "5d2c85497f5f7f54696d4831",
    "name": "Oneal Wolf",
    "gender": "male",
    "company": "ZENTRY",
    "email": "onealwolf@zentry.com"
  },
  {
    "id": "5d2c8549e18cf0fdc3cf4422",
    "name": "Munoz Kline",
    "gender": "male",
    "company": "NETAGY",
    "email": "munozkline@netagy.com"
  },
  {
    "id": "5d2c8549eb6eeaf10fa4b1b6",
    "name": "Isabella Sweet",
    "gender": "female",
    "company": "VOLAX",
    "email": "isabellasweet@volax.com"
  }
];