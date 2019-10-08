import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengdataviewScrollComponent } from './primengdataview-scroll.component';

describe('PrimengdataviewScrollComponent', () => {
  let component: PrimengdataviewScrollComponent;
  let fixture: ComponentFixture<PrimengdataviewScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengdataviewScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengdataviewScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
