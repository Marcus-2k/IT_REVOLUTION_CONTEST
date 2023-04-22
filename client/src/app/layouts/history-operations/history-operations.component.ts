import { Component } from '@angular/core';

@Component({
  selector: 'app-history-operations',
  templateUrl: './history-operations.component.html',
  styleUrls: ['./history-operations.component.scss']
})
export class HistoryOperationsComponent {

  arr=[{
    src:'./assets/shiba1.jpg',
    dataStart:new Date(),
    dataEnd:new Date(),
    title:'Назва оголошення',
    description:'Опис оголошення',
    city:'Назва міста',
    region:'район',
    cost:'ціна'
  },
  ]
}
