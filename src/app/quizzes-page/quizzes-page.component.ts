import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-quizzes-page',
  templateUrl: './quizzes-page.component.html',
  styleUrls: ['./quizzes-page.component.css']
})

export class QuizzesPageComponent {
  @Input() quizName: string;
  @Input() quizNumber: number;
  currentAnswer: number;

  constructor() {
    this.quizName = '';
    this.quizNumber = 0;
    this.currentAnswer = 0;
  }

  quizQuestion: string = 'What cricketing term denotes a batsman being dismissed with a score of zero?';

  quizAnswer: string[] = [
    "Los Angeles Lakers",
    "Boston Celtics",
    "Philadelphia 76ers",
    "Golden State Warriors"
  ];

  consoleHandler(event: Event) {
    this.currentAnswer = Number((event.target as HTMLInputElement).value);

    console.log("value of answer: ", (event.target as HTMLInputElement));
    console.log("current answer: ", this.currentAnswer);

  }

}
