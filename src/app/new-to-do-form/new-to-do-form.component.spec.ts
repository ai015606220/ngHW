import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewToDoFormComponent } from './new-to-do-form.component';

describe('NewToDoFormComponent', () => {
  let component: NewToDoFormComponent;
  let fixture: ComponentFixture<NewToDoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewToDoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewToDoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
