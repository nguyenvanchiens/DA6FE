import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KieuCoComponent } from './kieu-co.component';

describe('KieuCoComponent', () => {
  let component: KieuCoComponent;
  let fixture: ComponentFixture<KieuCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KieuCoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KieuCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
