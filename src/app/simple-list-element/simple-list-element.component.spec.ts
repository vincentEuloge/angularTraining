import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleListElementComponent } from './simple-list-element.component';

describe('SimpleListElementComponent', () => {
  let component: SimpleListElementComponent;
  let fixture: ComponentFixture<SimpleListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
