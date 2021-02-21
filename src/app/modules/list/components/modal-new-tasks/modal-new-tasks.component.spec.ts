import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewTasksComponent } from './modal-new-tasks.component';

describe('ModalNewTasksComponent', () => {
  let component: ModalNewTasksComponent;
  let fixture: ComponentFixture<ModalNewTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNewTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNewTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
