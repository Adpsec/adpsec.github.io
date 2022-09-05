import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCvComponent } from './header-cv.component';

describe('HeaderCvComponent', () => {
  let component: HeaderCvComponent;
  let fixture: ComponentFixture<HeaderCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
