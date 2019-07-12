import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProjectComponent } from './dash-project.component';

describe('DashProjectComponent', () => {
  let component: DashProjectComponent;
  let fixture: ComponentFixture<DashProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
