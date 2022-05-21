import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DauVaoComponent } from './dau-vao.component';

describe('DauVaoComponent', () => {
  let component: DauVaoComponent;
  let fixture: ComponentFixture<DauVaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DauVaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DauVaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
