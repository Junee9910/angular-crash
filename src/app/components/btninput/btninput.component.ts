import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btninput',
  templateUrl: './btninput.component.html',
  styleUrls: ['./btninput.component.css']
})
export class BtninputComponent implements OnInit {
  @Input() text?:string;
  @Input() color?:string;
  @Output() onInputData=new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  inputData(){
    this.onInputData.emit();
  }
}
