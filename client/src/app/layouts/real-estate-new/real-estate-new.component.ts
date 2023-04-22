import { Component } from '@angular/core';

@Component({
  selector: 'app-real-estate-new',
  templateUrl: './real-estate-new.component.html',
  styleUrls: ['./real-estate-new.component.scss'],
})
export class RealEstateNewComponent {
  select = 0;

  totalArea: number = 0;
  kitchen: number = 0;
  residential: number = 0;

  utilitiesIncluded = false;
  allowedPets = false;
  noSmoking = false;
  centralizedHeating = false;
  offerIntermediary = false;
  checkboxColor = 'primary';
}
