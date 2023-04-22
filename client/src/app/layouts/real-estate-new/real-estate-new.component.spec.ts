import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateNewComponent } from './real-estate-new.component';

describe('RealEstateNewComponent', () => {
  let component: RealEstateNewComponent;
  let fixture: ComponentFixture<RealEstateNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstateNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
