import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenComingSoonComponent } from './mainten-coming-soon.component';

describe('MaintenComingSoonComponent', () => {
  let component: MaintenComingSoonComponent;
  let fixture: ComponentFixture<MaintenComingSoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenComingSoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
