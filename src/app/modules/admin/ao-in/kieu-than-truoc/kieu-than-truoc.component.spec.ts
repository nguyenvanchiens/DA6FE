import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KieuThanTruocComponent } from './kieu-than-truoc.component';

describe('KieuThanTruocComponent', () => {
  let component: KieuThanTruocComponent;
  let fixture: ComponentFixture<KieuThanTruocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KieuThanTruocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KieuThanTruocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
