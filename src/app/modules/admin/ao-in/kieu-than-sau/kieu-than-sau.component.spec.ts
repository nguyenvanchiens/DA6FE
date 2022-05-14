import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KieuThanSauComponent } from './kieu-than-sau.component';

describe('KieuThanSauComponent', () => {
  let component: KieuThanSauComponent;
  let fixture: ComponentFixture<KieuThanSauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KieuThanSauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KieuThanSauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
