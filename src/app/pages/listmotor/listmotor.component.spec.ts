import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmotorComponent } from './listmotor.component';

describe('ListmotorComponent', () => {
  let component: ListmotorComponent;
  let fixture: ComponentFixture<ListmotorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmotorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
