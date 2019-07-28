import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit() {
    console.log(this.todo);
  }

  // Set dynamic classes
  setClasses() {
    let classes: any = {
      todo: true,
      colorme: false,
      'is-complete': this.todo.completed
    };

    return classes;
  }
}
