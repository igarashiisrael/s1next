import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucaoFisioComponent } from './evolucao-fisio.component';

describe('EvolucaoFisioComponent', () => {
  let component: EvolucaoFisioComponent;
  let fixture: ComponentFixture<EvolucaoFisioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolucaoFisioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvolucaoFisioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
