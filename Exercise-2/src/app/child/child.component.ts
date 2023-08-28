import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() item: string;

  constructor() {
    this.item = 'Vipul';  // <-- Fix bug
  }
}
