import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesCvComponent } from './certificates-cv.component';

describe('CertificatesCvComponent', () => {
  let component: CertificatesCvComponent;
  let fixture: ComponentFixture<CertificatesCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatesCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatesCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
