import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name: string = '';

  // Constructor runs when the component is initialized
  constructor() {
    console.log(123);
  }

  calc = (x: number, y: number): number => x * y;

  changeName = (name: string): void => {
    this.name = name;
    console.log(this.name);
  };
}
