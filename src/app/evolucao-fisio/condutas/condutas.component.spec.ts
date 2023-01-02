import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondutasComponent } from './condutas.component';

describe('CondutasComponent', () => {
  let component: CondutasComponent;
  let fixture: ComponentFixture<CondutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondutasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
