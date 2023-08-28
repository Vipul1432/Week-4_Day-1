import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() item!: string;
  @Output() itemClicked = new EventEmitter<void>();

  onItemClicked() {
    this.itemClicked.emit();
  }
}
