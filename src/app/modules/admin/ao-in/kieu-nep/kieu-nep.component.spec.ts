import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KieuNepComponent } from './kieu-nep.component';

describe('KieuNepComponent', () => {
  let component: KieuNepComponent;
  let fixture: ComponentFixture<KieuNepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KieuNepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KieuNepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
