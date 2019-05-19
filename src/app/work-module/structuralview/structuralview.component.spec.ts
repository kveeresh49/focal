import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralviewComponent } from './structuralview.component';

describe('StructuralviewComponent', () => {
  let component: StructuralviewComponent;
  let fixture: ComponentFixture<StructuralviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
