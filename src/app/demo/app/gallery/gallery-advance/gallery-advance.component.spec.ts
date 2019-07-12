import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAdvanceComponent } from './gallery-advance.component';

describe('GalleryAdvanceComponent', () => {
  let component: GalleryAdvanceComponent;
  let fixture: ComponentFixture<GalleryAdvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryAdvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
