import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedParameterHandlingComponent } from './extended-parameter-handling.component';

describe('ExtendedParameterHandlingComponent', () => {
  let component: ExtendedParameterHandlingComponent;
  let fixture: ComponentFixture<ExtendedParameterHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedParameterHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedParameterHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
