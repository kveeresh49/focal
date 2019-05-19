import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiraialViewComponent } from './hiraial-view.component';

describe('HiraialViewComponent', () => {
  let component: HiraialViewComponent;
  let fixture: ComponentFixture<HiraialViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiraialViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiraialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
