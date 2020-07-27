import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormsComponent } from './new-forms.component';

describe('NewFormsComponent', () => {
  let component: NewFormsComponent;
  let fixture: ComponentFixture<NewFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
