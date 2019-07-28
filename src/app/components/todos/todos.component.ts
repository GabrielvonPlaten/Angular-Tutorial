import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        id: 0,
        title: 'Title One',
        completed: false
      },
      {
        id: 1,
        title: 'Title Two',
        completed: true
      },
      {
        id: 2,
        title: 'Title Three',
        completed: false
      },
      {
        id: 3,
        title: 'Title Four',
        completed: false
      }
    ];
  }
}
