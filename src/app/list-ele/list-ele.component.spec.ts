import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEleComponent } from './list-ele.component';

describe('ListEleComponent', () => {
  let component: ListEleComponent;
  let fixture: ComponentFixture<ListEleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
