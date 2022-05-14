import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhPhanVaiHaiComponent } from './thanh-phan-vai-hai.component';

describe('ThanhPhanVaiHaiComponent', () => {
  let component: ThanhPhanVaiHaiComponent;
  let fixture: ComponentFixture<ThanhPhanVaiHaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanhPhanVaiHaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanhPhanVaiHaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
