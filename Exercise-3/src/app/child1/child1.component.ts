import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  @Output() dataToParent = new EventEmitter<string>();

  sendDataToParent() {
    this.dataToParent.emit('Data from Child 1');
  }
}
