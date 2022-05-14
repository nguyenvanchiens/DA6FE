import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AoOutComponent } from './ao-out.component';

describe('AoOutComponent', () => {
  let component: AoOutComponent;
  let fixture: ComponentFixture<AoOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AoOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AoOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
