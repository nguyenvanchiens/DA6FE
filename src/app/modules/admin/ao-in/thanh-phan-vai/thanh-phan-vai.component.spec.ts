import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhPhanVaiComponent } from './thanh-phan-vai.component';

describe('ThanhPhanVaiComponent', () => {
  let component: ThanhPhanVaiComponent;
  let fixture: ComponentFixture<ThanhPhanVaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanhPhanVaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanhPhanVaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
