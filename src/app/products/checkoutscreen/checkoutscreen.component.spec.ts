import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutscreenComponent } from './checkoutscreen.component';

describe('CheckoutscreenComponent', () => {
  let component: CheckoutscreenComponent;
  let fixture: ComponentFixture<CheckoutscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
