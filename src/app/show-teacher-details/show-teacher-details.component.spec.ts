import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTeacherDetailsComponent } from './show-teacher-details.component';

describe('ShowTeacherDetailsComponent', () => {
  let component: ShowTeacherDetailsComponent;
  let fixture: ComponentFixture<ShowTeacherDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTeacherDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTeacherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
