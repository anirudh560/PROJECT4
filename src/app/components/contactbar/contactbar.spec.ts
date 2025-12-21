import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactbar } from './contactbar';

describe('Contactbar', () => {
  let component: Contactbar;
  let fixture: ComponentFixture<Contactbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contactbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
