import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaiDauRaComponent } from './loai-dau-ra.component';

describe('LoaiDauRaComponent', () => {
  let component: LoaiDauRaComponent;
  let fixture: ComponentFixture<LoaiDauRaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaiDauRaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaiDauRaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
