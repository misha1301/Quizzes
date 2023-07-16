import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.css']
})
export class StatisticsPageComponent implements OnInit {

  userStatsArr: any[] = [];
  numberOfQuizzes: number = 0;
  totalAnswers: number = 0;
  averageTime: number = 1;
  totalCorrectAnswer:number = 0;
  pieDiagramSeries:number[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let result: any = localStorage.getItem('stats');
    if (result == '' || result == null) {
      this.navigateToHomePage();
    } else {
      this.userStatsArr = JSON.parse(result);
      this.userStatsArr.sort((a,b) => {return +new Date(b.startDate) - +new Date(a.startDate)} );

      this.numberOfQuizzes = this.userStatsArr.length;
      for (let i: number = 0; i < this.userStatsArr.length; i++) {
        this.totalAnswers += this.userStatsArr[i].quizTotalQuestions;
        this.totalCorrectAnswer += this.userStatsArr[i].correctAnswers;
        this.averageTime += this.userStatsArr[i].totalTime;
      }
      this.pieDiagramSeries = [this.totalCorrectAnswer, this.totalAnswers-this.totalCorrectAnswer];
      this.averageTime = this.averageTime/this.userStatsArr.length;
      console.log(this.pieDiagramSeries)
    }
  }
  navigateToHomePage(): void {
    this.router.navigate(['/'], {relativeTo: this.activatedRoute})
      .then(succeeded => {
      })
      .catch(error => {
        console.log("Routing to \"/\" error: ", error);
      });
  }
}

