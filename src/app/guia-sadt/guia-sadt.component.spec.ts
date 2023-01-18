import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaSadtComponent } from './guia-sadt.component';

describe('GuiaSadtComponent', () => {
  let component: GuiaSadtComponent;
  let fixture: ComponentFixture<GuiaSadtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiaSadtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiaSadtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
