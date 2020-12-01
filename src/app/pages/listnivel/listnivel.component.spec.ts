import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnivelComponent } from './listnivel.component';

describe('ListnivelComponent', () => {
  let component: ListnivelComponent;
  let fixture: ComponentFixture<ListnivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListnivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
