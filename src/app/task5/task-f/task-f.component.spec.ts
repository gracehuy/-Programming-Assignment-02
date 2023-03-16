import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFComponent } from './task-f.component';

describe('TaskFComponent', () => {
  let component: TaskFComponent;
  let fixture: ComponentFixture<TaskFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
