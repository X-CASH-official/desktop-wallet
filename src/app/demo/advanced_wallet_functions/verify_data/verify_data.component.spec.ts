import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { verify_dataComponent } from './verify_data.component';

describe('verify_dataComponent', () => {
  let component: verify_dataComponent;
  let fixture: ComponentFixture<verify_dataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ verify_dataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(verify_dataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
