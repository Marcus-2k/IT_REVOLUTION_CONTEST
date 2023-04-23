import { Component, OnInit } from '@angular/core';
import { HistoryOperations } from 'src/app/shared/interface/interfaces';
import { RenameTitleService } from 'src/app/shared/service/rename-title.service';

@Component({
  selector: 'app-history-operations',
  templateUrl: './history-operations.component.html',
  styleUrls: ['./history-operations.component.scss'],
})
export class HistoryOperationsComponent implements OnInit {
  constructor(private renameTitle: RenameTitleService) {}

  ngOnInit(): void {
    console.log('Start ngOnInit History-Operations');

    this.renameTitle.renameTitleSite('Історія операцій');
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
