import { Component, inject, input } from '@angular/core';
import { ITodo } from '../../model/todo.type';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todo = input.required<ITodo>()
}
