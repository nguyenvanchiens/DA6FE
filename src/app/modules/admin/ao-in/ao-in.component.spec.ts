import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AoInComponent } from './ao-in.component';

describe('AoInComponent', () => {
  let component: AoInComponent;
  let fixture: ComponentFixture<AoInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AoInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AoInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
