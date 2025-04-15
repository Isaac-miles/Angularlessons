import { Injectable } from '@angular/core';
import { ITodo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems: Array<ITodo> = [
    {
      id: 1,
      title: 'Todo 1',
      completed: false,
      userId: 1
    },
    {
      id: 2,
      title: 'Todo 2',
      completed: true,
      userId: 1
    }
  ];
  constructor() { }
  // Methods to manipulate todos
  addTodo(todo: ITodo): void {
    this.todoItems.push(todo);
  }
  getTodos(): Array<ITodo> {
    return this.todoItems;
  }
  deleteTodo(id: number): void {
    this.todoItems = this.todoItems.filter(todo => todo.id !== id);
  }
}
