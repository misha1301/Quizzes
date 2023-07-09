import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-quizzes-stats',
  templateUrl: './quizzes-stats.component.html',
  styleUrls: ['./quizzes-stats.component.css']
})
export class QuizzesStatsComponent {
  @Input() numberOfQuizzes:number = 0;
  @Input() totalAnswers:number = 0;
  @Input() averageTime:number = 0;
}
