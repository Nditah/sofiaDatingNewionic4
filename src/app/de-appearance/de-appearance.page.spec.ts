import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeAppearancePage } from './de-appearance.page';

describe('DeAppearancePage', () => {
  let component: DeAppearancePage;
  let fixture: ComponentFixture<DeAppearancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeAppearancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeAppearancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
