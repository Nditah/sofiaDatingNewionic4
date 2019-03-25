import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoPage } from './howto.page';

describe('HowtoPage', () => {
  let component: HowtoPage;
  let fixture: ComponentFixture<HowtoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowtoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
