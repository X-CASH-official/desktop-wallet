import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsConnectionComponent } from './settings-connection.component';

describe('SettingsConnectionComponent', () => {
  let component: SettingsConnectionComponent;
  let fixture: ComponentFixture<SettingsConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
