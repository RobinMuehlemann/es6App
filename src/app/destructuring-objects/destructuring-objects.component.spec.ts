import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestructuringObjectsComponent } from './destructuring-objects.component';

describe('DestructuringObjectsComponent', () => {
  let component: DestructuringObjectsComponent;
  let fixture: ComponentFixture<DestructuringObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestructuringObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestructuringObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
