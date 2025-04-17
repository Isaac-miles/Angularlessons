import { inject, Injectable } from '@angular/core';
import { ITodo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient)
  constructor() { }

  getTodos(){
    return this.http.get<Array<ITodo>>('https://jsonplaceholder.typicode.com/todos');
  }
  
  // Methods to manipulate todos
  // addTodo(todo: ITodo): void {
  //   this.todoItems.push(todo);
  // }
 
  // deleteTodo(id: number): void {
  //   this.todoItems = this.todoItems.filter(todo => todo.id !== id);
  // }
}
