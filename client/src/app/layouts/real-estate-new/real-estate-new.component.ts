import { Component, OnInit } from '@angular/core';
import { RenameTitleService } from 'src/app/shared/service/rename-title.service';

import { ApiAnnouncementService } from 'src/app/shared/service/server/api-announcement.service';

@Component({
  selector: 'app-real-estate-new',
  templateUrl: './real-estate-new.component.html',
  styleUrls: ['./real-estate-new.component.scss'],
})
export class RealEstateNewComponent implements OnInit {
  constructor(
    private ApiAnnouncement: ApiAnnouncementService,
    private renameTitle: RenameTitleService
  ) {}

  ngOnInit(): void {
    console.log('Start ngOnInit Real-Estate-New');

    this.renameTitle.renameTitleSite('Нове оголошення');
  }

  number_of_rooms: number = 0;

  description: string = '';

  totalArea: number = 0;
  residential: number = 0;
  kitchen: number = 0;

  utilitiesIncluded: boolean = false;
  allowedPets: boolean = false;
  noSmoking: boolean = false;
  centralizedHeating: boolean = false;
  offerIntermediary: boolean = false;

  createAnnouncement() {
    console.log('number_of_rooms = ', this.number_of_rooms);
    console.log('description = ', this.description);
    console.log('totalArea = ', this.totalArea);
    console.log('residential = ', this.residential);
    console.log('kitchen = ', this.kitchen);
    console.log('utilitiesIncluded = ', this.utilitiesIncluded);
    console.log('allowedPets = ', this.allowedPets);
    console.log('noSmoking = ', this.noSmoking);
    console.log('centralizedHeating = ', this.centralizedHeating);
    console.log('offerIntermediary = ', this.offerIntermediary);

    this.ApiAnnouncement.createAnnouncement({
      number_of_rooms: this.number_of_rooms,
      description: this.description,
      totalArea: this.totalArea,
      residential: this.residential,
      kitchen: this.kitchen,
    });
  }
}
