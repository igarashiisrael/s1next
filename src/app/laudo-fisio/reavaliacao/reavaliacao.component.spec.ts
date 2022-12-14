import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReavaliacaoComponent } from './reavaliacao.component';

describe('ReavaliacaoComponent', () => {
  let component: ReavaliacaoComponent;
  let fixture: ComponentFixture<ReavaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReavaliacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReavaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
