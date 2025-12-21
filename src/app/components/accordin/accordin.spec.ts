import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accordin } from './accordin';

describe('Accordin', () => {
  let component: Accordin;
  let fixture: ComponentFixture<Accordin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accordin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accordin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
