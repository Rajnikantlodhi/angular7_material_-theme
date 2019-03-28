import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderthemsComponent } from './headerthems.component';

describe('HeaderthemsComponent', () => {
  let component: HeaderthemsComponent;
  let fixture: ComponentFixture<HeaderthemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderthemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderthemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
