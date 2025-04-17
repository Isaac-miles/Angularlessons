import { Component, inject, input, output } from '@angular/core';
import { ITodo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodoDirective],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todo = input.required<ITodo>();
  todoToggled = output<ITodo>();

  todoClicked(){
    
  }
}
