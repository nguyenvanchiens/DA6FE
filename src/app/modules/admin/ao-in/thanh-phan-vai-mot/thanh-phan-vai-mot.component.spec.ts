import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhPhanVaiMotComponent } from './thanh-phan-vai-mot.component';

describe('ThanhPhanVaiMotComponent', () => {
  let component: ThanhPhanVaiMotComponent;
  let fixture: ComponentFixture<ThanhPhanVaiMotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanhPhanVaiMotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanhPhanVaiMotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
