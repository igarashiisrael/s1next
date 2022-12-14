import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinaisVitaisPediatricoComponent } from './sinais-vitais-pediatrico.component';

describe('SinaisVitaisPediatricoComponent', () => {
  let component: SinaisVitaisPediatricoComponent;
  let fixture: ComponentFixture<SinaisVitaisPediatricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinaisVitaisPediatricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinaisVitaisPediatricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
