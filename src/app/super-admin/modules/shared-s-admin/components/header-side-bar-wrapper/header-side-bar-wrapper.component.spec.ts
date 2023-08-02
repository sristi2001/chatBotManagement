import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSideBarWrapperComponent } from './header-side-bar-wrapper.component';

describe('HeaderSideBarWrapperComponent', () => {
  let component: HeaderSideBarWrapperComponent;
  let fixture: ComponentFixture<HeaderSideBarWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSideBarWrapperComponent]
    });
    fixture = TestBed.createComponent(HeaderSideBarWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
