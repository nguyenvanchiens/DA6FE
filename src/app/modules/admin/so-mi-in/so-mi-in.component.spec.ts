import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoMiInComponent } from './so-mi-in.component';

describe('SoMiInComponent', () => {
  let component: SoMiInComponent;
  let fixture: ComponentFixture<SoMiInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoMiInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoMiInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
