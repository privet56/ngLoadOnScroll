import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxVirtScrollComponent } from './ngx-virt-scroll.component';

describe('NgxVirtScrollComponent', () => {
  let component: NgxVirtScrollComponent;
  let fixture: ComponentFixture<NgxVirtScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxVirtScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxVirtScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
