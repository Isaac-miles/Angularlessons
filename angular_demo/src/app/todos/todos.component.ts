import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { ITodo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<ITodo>>([])
by: any;

  ngOnInit(): void {
    this.todoService.getTodos()
    .pipe((err)=>{
      console.log(err);
      throw err
    })
    .subscribe(todos=>{
      this.todoItems.set(todos)
    });
  }
}
