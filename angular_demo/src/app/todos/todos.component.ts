import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { ITodo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  imports: [NgIf,TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<ITodo>>([])
by: any;

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
}
