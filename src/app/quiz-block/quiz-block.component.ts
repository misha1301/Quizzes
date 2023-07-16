import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-quiz-block',
  templateUrl: './quiz-block.component.html',
  styleUrls: ['./quiz-block.component.css']
})
export class QuizBlockComponent implements OnInit {
  @Input() quizName: string;
  @Input() quizData: string;
  @Output() onClick = new EventEmitter<string>();

  constructor() {
    this.quizName = '';
    this.quizData = '';
  }

  ngOnInit(): void {}

  emitEvent(){
    this.onClick.emit();
  }
}
