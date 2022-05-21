import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaiAoComponent } from './loai-ao.component';

describe('LoaiAoComponent', () => {
  let component: LoaiAoComponent;
  let fixture: ComponentFixture<LoaiAoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaiAoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaiAoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
