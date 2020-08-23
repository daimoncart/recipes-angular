import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UomFormComponent } from './uom-form.component';

describe('UomFormComponent', () => {
  let component: UomFormComponent;
  let fixture: ComponentFixture<UomFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UomFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
