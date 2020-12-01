import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmicroswComponent } from './listmicrosw.component';

describe('ListmicroswComponent', () => {
  let component: ListmicroswComponent;
  let fixture: ComponentFixture<ListmicroswComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmicroswComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmicroswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
