import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaudoImpressaoComponent } from './laudo-impressao.component';

describe('LaudoImpressaoComponent', () => {
  let component: LaudoImpressaoComponent;
  let fixture: ComponentFixture<LaudoImpressaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaudoImpressaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaudoImpressaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
