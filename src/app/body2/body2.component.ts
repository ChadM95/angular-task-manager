import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.css']
})
export class Body2Component implements OnInit {


  @Output() dataEmitter = new EventEmitter<string>();

  sendData(value: string) {
    this.dataEmitter.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
