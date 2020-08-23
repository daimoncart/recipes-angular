import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IngredientsMeasurementListComponent} from './ingredients-measurement-list.component';

describe('IngredientsMeasurmentListComponent', () => {
  let component: IngredientsMeasurementListComponent;
  let fixture: ComponentFixture<IngredientsMeasurementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsMeasurementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsMeasurementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
