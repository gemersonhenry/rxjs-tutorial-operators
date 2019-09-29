import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromOfComponent } from './from-of.component';

describe('FromOfComponent', () => {
  let component: FromOfComponent;
  let fixture: ComponentFixture<FromOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromOfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
