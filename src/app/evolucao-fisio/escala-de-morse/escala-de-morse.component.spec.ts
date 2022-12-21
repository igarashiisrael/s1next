import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaDeMorseComponent } from './escala-de-morse.component';

describe('EscalaDeMorseComponent', () => {
  let component: EscalaDeMorseComponent;
  let fixture: ComponentFixture<EscalaDeMorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaDeMorseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalaDeMorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
