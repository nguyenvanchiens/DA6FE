import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanOptionComponent } from './gan-option.component';

describe('GanOptionComponent', () => {
  let component: GanOptionComponent;
  let fixture: ComponentFixture<GanOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
