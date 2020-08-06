import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsMeasurmentListComponent } from './ingredients-measurment-list.component';

describe('IngredientsMeasurmentListComponent', () => {
  let component: IngredientsMeasurmentListComponent;
  let fixture: ComponentFixture<IngredientsMeasurmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsMeasurmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsMeasurmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
