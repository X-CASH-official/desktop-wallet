import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardNavbarLgComponent } from './wizard-navbar-lg.component';

describe('WizardNavbarLgComponent', () => {
  let component: WizardNavbarLgComponent;
  let fixture: ComponentFixture<WizardNavbarLgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardNavbarLgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardNavbarLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
