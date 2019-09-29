import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAndFooterCardComponent } from './header-and-footer-card.component';

describe('HeaderAndFooterCardComponent', () => {
  let component: HeaderAndFooterCardComponent;
  let fixture: ComponentFixture<HeaderAndFooterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAndFooterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAndFooterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
