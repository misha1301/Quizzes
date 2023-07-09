import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})

export class ButtonComponent implements OnInit {
  @Input() btnValue: string;
  @Input() btnClass: string;
  @Input() btnDisabled: boolean;
  @Output() onClick = new EventEmitter<string>();

  constructor() {
    this.btnValue = '';
    this.btnClass = '';
    this.btnDisabled = false;
  }

  ngOnInit(): void {}
  emitEvent(){
    this.onClick.emit();
  }
}
