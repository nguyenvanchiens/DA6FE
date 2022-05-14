import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KieuXeComponent } from './kieu-xe.component';

describe('KieuXeComponent', () => {
  let component: KieuXeComponent;
  let fixture: ComponentFixture<KieuXeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KieuXeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KieuXeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
