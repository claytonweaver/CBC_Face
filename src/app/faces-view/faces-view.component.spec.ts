import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacesViewComponent } from './faces-view.component';

describe('FacesViewComponent', () => {
  let component: FacesViewComponent;
  let fixture: ComponentFixture<FacesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
