import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaIdentificacaoComponent } from './ficha-identificacao.component';

describe('FichaIdentificacaoComponent', () => {
  let component: FichaIdentificacaoComponent;
  let fixture: ComponentFixture<FichaIdentificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaIdentificacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaIdentificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
