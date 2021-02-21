import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() {}

  ngOnInit(): void {}
}
