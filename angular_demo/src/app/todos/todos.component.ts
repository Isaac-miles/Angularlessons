import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { ITodo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  imports: [NgIf,TodoItemComponent,FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<ITodo>>([])
  searchTerm = signal('');

  ngOnInit(): void {
    this.todoService.getTodos()
    .pipe(
      catchError((err)=>{
        console.log(err)
        throw err
      })
    )
    .subscribe(todos=>{
      this.todoItems.set(todos)
    });
  }

  updateTodo(todoItem:ITodo){
    this.todoItems.update((todos)=>{
      return todos.map((todo)=>{
        if(todo.id === todoItem.id){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    })
  }
}
