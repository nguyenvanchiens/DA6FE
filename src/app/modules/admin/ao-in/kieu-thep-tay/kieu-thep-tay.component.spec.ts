import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KieuThepTayComponent } from './kieu-thep-tay.component';

describe('KieuThepTayComponent', () => {
  let component: KieuThepTayComponent;
  let fixture: ComponentFixture<KieuThepTayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KieuThepTayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KieuThepTayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
