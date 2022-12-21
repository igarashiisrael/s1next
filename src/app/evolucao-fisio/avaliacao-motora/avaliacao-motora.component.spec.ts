import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoMotoraComponent } from './avaliacao-motora.component';

describe('AvaliacaoMotoraComponent', () => {
  let component: AvaliacaoMotoraComponent;
  let fixture: ComponentFixture<AvaliacaoMotoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoMotoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoMotoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
