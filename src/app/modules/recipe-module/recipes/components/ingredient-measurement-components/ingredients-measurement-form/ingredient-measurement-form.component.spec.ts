import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientMeasurementFormComponent } from './ingredient-measurement-form.component';

describe('IngredientsMesurementFormComponent', () => {
  let component: IngredientMeasurementFormComponent;
  let fixture: ComponentFixture<IngredientMeasurementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientMeasurementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientMeasurementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
