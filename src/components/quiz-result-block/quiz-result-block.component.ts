import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-quiz-result-block',
  templateUrl: './quiz-result-block.component.html',
  styleUrls: ['./quiz-result-block.component.css']
})
export class QuizResultBlockComponent {
  @Input() quizName:string = "Quiz";
  @Input() quizDate:string = "--.--.---- --:-- / 10 questions";
  @Input() quizRate:string = "--";
  @Input() quizTime:string = "--";


}
