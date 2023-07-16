import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-quiz-result-block',
  templateUrl: './quiz-result-block.component.html',
  styleUrls: ['./quiz-result-block.component.css']
})
export class QuizResultBlockComponent {
  @Input() quizName:string = "Quiz";
  @Input() quizDate:string = "--.--.---- --:--";
  @Input() quizTotalQuestions:number = 0;
  @Input() quizDifficulty: string = '--'
  @Input() quizRate:number = 0;
  @Input() quizTime:number = 0;

  convertMsToTime(milliseconds: number): string {
    let seconds: number = Math.floor(milliseconds / 1000);
    let minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${seconds > 0 ? seconds + 's ' : ''}`;
  }
}
