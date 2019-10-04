import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengScrollComponent } from './primeng-scroll.component';

describe('PrimengScrollComponent', () => {
  let component: PrimengScrollComponent;
  let fixture: ComponentFixture<PrimengScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
