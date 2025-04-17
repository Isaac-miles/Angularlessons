import { Pipe, PipeTransform } from '@angular/core';
import { ITodo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: ITodo[], searchTerm:string): ITodo[] {
    
    if(!searchTerm){
      return todos
    }
    const text = searchTerm.toLowerCase()
    return todos.filter(todo=>{
      return todo.title.toLowerCase().includes(text)
    })
  }


}
