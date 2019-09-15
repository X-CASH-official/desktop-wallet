import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sign_dataComponent } from './sign_data.component';

describe('sign_dataComponent', () => {
  let component: sign_dataComponent;
  let fixture: ComponentFixture<sign_dataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sign_dataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sign_dataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
