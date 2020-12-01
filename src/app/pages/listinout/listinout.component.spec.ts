import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinoutComponent } from './listinout.component';

describe('ListinoutComponent', () => {
  let component: ListinoutComponent;
  let fixture: ComponentFixture<ListinoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListinoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListinoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
