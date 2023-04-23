import { Component, OnInit } from '@angular/core';
import { RenameTitleService } from 'src/app/shared/service/rename-title.service';

@Component({
  selector: 'app-apartments-cards',
  templateUrl: './apartments-cards.component.html',
  styleUrls: ['./apartments-cards.component.scss'],
})
export class ApartmentsCardsComponent implements OnInit {
  constructor(private renameTitle: RenameTitleService) {}

  ngOnInit(): void {
    this.renameTitle.renameTitleSite("Ваші об'кти");
  }
  arr = [
    {
      src: './assets/interer-kvartiri1.jpg',
      title: 'Апартаменти',
      description: 'Опис оголошення',
      status: 'Здається',
      price: 15000 + '₴',
    },
  ];
}
