import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('numberValue') numberValue: ElementRef;

  @Input('nombre') leyenda = 'Leyenda';
  @Input() progress = 50;

  @Output() valueOnChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanges(value: number) {

    if (value >= 100) {
      this.progress = 100;
    } else if (value <= 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }

    this.numberValue.nativeElement.value = this.progress;
    this.valueOnChange.emit(this.progress);
  }

  changeValue(n: number) {
    if (this.progress >= 100 && n > 0) {
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && n < 0) {
      this.progress = 0;
      return;
    }
    this.progress += n;

    this.valueOnChange.emit(this.progress);
    this.numberValue.nativeElement.focus();
  }

}
