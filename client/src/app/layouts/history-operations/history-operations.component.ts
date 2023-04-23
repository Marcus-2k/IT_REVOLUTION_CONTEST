import { Component, OnInit } from '@angular/core';
import { HistoryOperations } from 'src/app/shared/interface/interfaces';

@Component({
  selector: 'app-history-operations',
  templateUrl: './history-operations.component.html',
  styleUrls: ['./history-operations.component.scss'],
})
export class HistoryOperationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Start ngOnInit History-Operations');
  }

  history: HistoryOperations[] = [
    {
      src: '',
      title: 'Назва оголошення',
      description: 'Опис оголошення',
      city: 'Вінниця',
      region: 'вишенька',
      dataStart: new Date(),
      dataEnd: new Date(),
      cost: 35499,
    },
    {
      src: '',
      title: 'Назва оголошення',
      description: 'Опис оголошення',
      city: 'Вінниця',
      region: 'київська',
      dataStart: new Date(),
      dataEnd: new Date(),
      cost: 35499,
    },
  ];
}
