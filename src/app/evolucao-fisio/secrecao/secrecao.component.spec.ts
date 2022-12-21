import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecrecaoComponent } from './secrecao.component';

describe('SecrecaoComponent', () => {
  let component: SecrecaoComponent;
  let fixture: ComponentFixture<SecrecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecrecaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecrecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
