import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrreadcrumbComponent } from './breadcrumb.component';

describe('BrreadcrumbComponent', () => {
  let component: BrreadcrumbComponent;
  let fixture: ComponentFixture<BrreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
