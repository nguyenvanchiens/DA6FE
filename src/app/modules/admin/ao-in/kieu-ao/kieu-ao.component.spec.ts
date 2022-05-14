import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KieuAoComponent } from './kieu-ao.component';

describe('KieuAoComponent', () => {
  let component: KieuAoComponent;
  let fixture: ComponentFixture<KieuAoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KieuAoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KieuAoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
