import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLiteralsComponent } from './template-literals.component';

describe('TemplateLiteralsComponent', () => {
  let component: TemplateLiteralsComponent;
  let fixture: ComponentFixture<TemplateLiteralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateLiteralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateLiteralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
