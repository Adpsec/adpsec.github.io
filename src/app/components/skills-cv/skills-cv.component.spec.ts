import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCvComponent } from './skills-cv.component';

describe('SkillsCvComponent', () => {
  let component: SkillsCvComponent;
  let fixture: ComponentFixture<SkillsCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
