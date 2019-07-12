import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenOfflineUiComponent } from './mainten-offline-ui.component';

describe('MaintenOfflineUiComponent', () => {
  let component: MaintenOfflineUiComponent;
  let fixture: ComponentFixture<MaintenOfflineUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenOfflineUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenOfflineUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
