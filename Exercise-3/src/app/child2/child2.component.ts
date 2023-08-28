import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  @Output() dataToParent = new EventEmitter<string>();
  

  sendDataToParent() {
    this.dataToParent.emit('Data from Child 2');
  }
}
