import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() item: string;

  constructor() {
    this.item = 42;  // <-- Intentional type error: assigning a number to a string input
  }
}
