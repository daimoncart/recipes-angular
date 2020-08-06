import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsMesurementFormComponent } from './ingredients-mesurement-form.component';

describe('IngredientsMesurementFormComponent', () => {
  let component: IngredientsMesurementFormComponent;
  let fixture: ComponentFixture<IngredientsMesurementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsMesurementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsMesurementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
