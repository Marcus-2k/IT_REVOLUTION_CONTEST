import { Component } from '@angular/core';

@Component({
  selector: 'app-real-estate-new',
  templateUrl: './real-estate-new.component.html',
  styleUrls: ['./real-estate-new.component.scss'],
})
export class RealEstateNewComponent {
  number_of_rooms: number = 0;

  totalArea: number = 0;
  kitchen: number = 0;
  residential: number = 0;

  utilitiesIncluded = false;
  allowedPets = false;
  noSmoking = false;
  centralizedHeating = false;
  offerIntermediary = false;
}
