import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcoolerComponent } from './listcooler.component';

describe('ListcoolerComponent', () => {
  let component: ListcoolerComponent;
  let fixture: ComponentFixture<ListcoolerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcoolerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcoolerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
