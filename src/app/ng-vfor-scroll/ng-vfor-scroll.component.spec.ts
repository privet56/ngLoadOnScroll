import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgVForScrollComponent } from './ng-vfor-scroll.component';

describe('NgVForScrollComponent', () => {
  let component: NgVForScrollComponent;
  let fixture: ComponentFixture<NgVForScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgVForScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgVForScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
