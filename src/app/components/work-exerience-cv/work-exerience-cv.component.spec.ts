import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExerienceCvComponent } from './work-exerience-cv.component';

describe('WorkExerienceCvComponent', () => {
  let component: WorkExerienceCvComponent;
  let fixture: ComponentFixture<WorkExerienceCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExerienceCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExerienceCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
