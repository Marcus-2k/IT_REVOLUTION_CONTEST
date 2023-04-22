import { Component } from '@angular/core';

@Component({
  selector: 'app-apartments-cards',
  templateUrl: './apartments-cards.component.html',
  styleUrls: ['./apartments-cards.component.scss'],
})
export class ApartmentsCardsComponent {
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
