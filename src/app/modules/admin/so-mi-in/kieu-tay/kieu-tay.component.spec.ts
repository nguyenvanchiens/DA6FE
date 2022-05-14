import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KieuTayComponent } from './kieu-tay.component';

describe('KieuTayComponent', () => {
  let component: KieuTayComponent;
  let fixture: ComponentFixture<KieuTayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KieuTayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KieuTayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
