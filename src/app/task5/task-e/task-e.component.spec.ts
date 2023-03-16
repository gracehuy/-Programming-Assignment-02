import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEComponent } from './task-e.component';

describe('TaskEComponent', () => {
  let component: TaskEComponent;
  let fixture: ComponentFixture<TaskEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
