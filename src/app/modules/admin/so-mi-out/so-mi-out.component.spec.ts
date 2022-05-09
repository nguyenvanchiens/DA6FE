import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoMiOutComponent } from './so-mi-out.component';

describe('SoMiOutComponent', () => {
  let component: SoMiOutComponent;
  let fixture: ComponentFixture<SoMiOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoMiOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoMiOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
