import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaIdentImpressaoComponent } from './ficha-ident-impressao.component';

describe('FichaIdentImpressaoComponent', () => {
  let component: FichaIdentImpressaoComponent;
  let fixture: ComponentFixture<FichaIdentImpressaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaIdentImpressaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaIdentImpressaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
