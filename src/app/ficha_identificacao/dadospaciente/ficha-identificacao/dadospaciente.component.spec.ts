import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadospacienteComponent } from './dadospaciente.component';

describe('DadospacienteComponent', () => {
  let component: DadospacienteComponent;
  let fixture: ComponentFixture<DadospacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadospacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadospacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
