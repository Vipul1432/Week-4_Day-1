import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
 parentData = 'Data from Parent';
 dataFromChild1!: string;
 dataFromChild2!: string;

 receiveDataFromChild1(data: string) {
   this.dataFromChild1 = data;
 }

 receiveDataFromChild2(data: string) {
   this.dataFromChild2 = data;
 }
}
