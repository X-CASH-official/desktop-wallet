import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtTinymceComponent } from './ext-tinymce.component';

describe('ExtTinymceComponent', () => {
  let component: ExtTinymceComponent;
  let fixture: ComponentFixture<ExtTinymceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtTinymceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtTinymceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
