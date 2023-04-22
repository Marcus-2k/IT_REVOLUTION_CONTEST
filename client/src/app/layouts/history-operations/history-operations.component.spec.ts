import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOperationsComponent } from './history-operations.component';

describe('HistoryOperationsComponent', () => {
  let component: HistoryOperationsComponent;
  let fixture: ComponentFixture<HistoryOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
