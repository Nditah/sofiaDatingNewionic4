import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedContactsPage } from './requested-contacts.page';

describe('RequestedContactsPage', () => {
  let component: RequestedContactsPage;
  let fixture: ComponentFixture<RequestedContactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedContactsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
