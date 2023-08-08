import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotableComponent } from './demotable.component';

describe('DemotableComponent', () => {
  let component: DemotableComponent;
  let fixture: ComponentFixture<DemotableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemotableComponent]
    });
    fixture = TestBed.createComponent(DemotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
