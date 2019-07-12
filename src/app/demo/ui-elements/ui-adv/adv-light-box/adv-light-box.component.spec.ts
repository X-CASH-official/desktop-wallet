import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvLightBoxComponent } from './adv-light-box.component';

describe('AdvLightBoxComponent', () => {
  let component: AdvLightBoxComponent;
  let fixture: ComponentFixture<AdvLightBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvLightBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvLightBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
