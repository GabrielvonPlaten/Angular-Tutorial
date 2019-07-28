import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

// Class
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    // Subscribe can be interpreted as .then
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
}
