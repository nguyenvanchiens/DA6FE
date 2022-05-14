import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KieuTuiComponent } from './kieu-tui.component';

describe('KieuTuiComponent', () => {
  let component: KieuTuiComponent;
  let fixture: ComponentFixture<KieuTuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KieuTuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KieuTuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
