import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaudoFisioImpressaoComponent } from './laudo-fisio-impressao.component';

describe('LaudoFisioImpressaoComponent', () => {
  let component: LaudoFisioImpressaoComponent;
  let fixture: ComponentFixture<LaudoFisioImpressaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaudoFisioImpressaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaudoFisioImpressaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
