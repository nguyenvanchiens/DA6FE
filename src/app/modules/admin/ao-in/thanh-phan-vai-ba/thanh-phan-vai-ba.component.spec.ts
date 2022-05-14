import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhPhanVaiBaComponent } from './thanh-phan-vai-ba.component';

describe('ThanhPhanVaiBaComponent', () => {
  let component: ThanhPhanVaiBaComponent;
  let fixture: ComponentFixture<ThanhPhanVaiBaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanhPhanVaiBaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanhPhanVaiBaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
