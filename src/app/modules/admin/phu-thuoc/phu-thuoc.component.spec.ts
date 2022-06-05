import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhuThuocComponent } from './phu-thuoc.component';

describe('PhuThuocComponent', () => {
  let component: PhuThuocComponent;
  let fixture: ComponentFixture<PhuThuocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhuThuocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhuThuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
