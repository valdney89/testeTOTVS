import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-inputError',
  templateUrl: './input-error.component.html',
})
export class InputErrorComponent {
  @Input() error = '';
}
