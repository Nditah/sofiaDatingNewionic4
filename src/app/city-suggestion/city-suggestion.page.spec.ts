import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySuggestionPage } from './city-suggestion.page';

describe('CitySuggestionPage', () => {
  let component: CitySuggestionPage;
  let fixture: ComponentFixture<CitySuggestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitySuggestionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySuggestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
