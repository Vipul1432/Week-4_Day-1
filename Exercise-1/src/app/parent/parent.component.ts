import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
