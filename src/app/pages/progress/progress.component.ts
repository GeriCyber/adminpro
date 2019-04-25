import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progress1 = 50;
  progress2 = 20;

  constructor() { }

  ngOnInit() {
  }

  // changeValue(n: number) {
  //   if (this.progress >= 100 && n > 0) {
  //     this.progress = 100;
  //     return;
  //   }
  //   if (this.progress <= 0 && n < 0) {
  //     this.progress = 0;
  //     return;
  //   }
  //   this.progress += n;
  // }

}
