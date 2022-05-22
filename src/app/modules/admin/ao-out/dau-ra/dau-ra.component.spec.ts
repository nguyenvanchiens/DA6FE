import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DauRaComponent } from './dau-ra.component';

describe('DauRaComponent', () => {
  let component: DauRaComponent;
  let fixture: ComponentFixture<DauRaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DauRaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DauRaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
