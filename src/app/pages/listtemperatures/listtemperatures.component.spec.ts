import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtemperaturesComponent } from './listtemperatures.component';

describe('ListtemperaturesComponent', () => {
  let component: ListtemperaturesComponent;
  let fixture: ComponentFixture<ListtemperaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtemperaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtemperaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
