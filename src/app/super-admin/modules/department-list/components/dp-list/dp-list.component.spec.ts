import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpListComponent } from './dp-list.component';

describe('DpListComponent', () => {
  let component: DpListComponent;
  let fixture: ComponentFixture<DpListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DpListComponent]
    });
    fixture = TestBed.createComponent(DpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
