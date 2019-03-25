import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpImagePage } from './corp-image.page';

describe('CorpImagePage', () => {
  let component: CorpImagePage;
  let fixture: ComponentFixture<CorpImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
