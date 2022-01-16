import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  Todos: Todo[];
  localItem: string;

  constructor() { 
    this.localItem = localStorage.getItem("Todos");
    if( this.localItem == null ) {
      this.Todos = []
    } else {
      this.Todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo) {
    console.log("deleteTodo Function");
    const index = this.Todos.indexOf(todo);
    this.Todos.splice( index, 1);
    localStorage.setItem("Todos", JSON.stringify(this.Todos));
  }

  addTodo(todo:Todo) {
    console.log("addTodo Function");
    this.Todos.push(todo);
    localStorage.setItem("Todos", JSON.stringify(this.Todos));
  }

  toggleTodo(todo:Todo) {
    console.log("toggleTodo Function");
    const index = this.Todos.indexOf(todo);
    this.Todos[index].active = !this.Todos[index].active;
    localStorage.setItem("Todos", JSON.stringify(this.Todos));
  }

}
