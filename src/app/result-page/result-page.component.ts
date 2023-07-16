import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit{
  correctAnswers: number = 0;
  totalTime: number = 0;
  startDate: string = '';
  quizTotalQuestions: number = 0;
  quizDifficulty: string = '';
  quizCategory: string = '';


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let result: any = localStorage.getItem('result');
    if (result == '' || result == null) {
      this.navigateToHomePage();
    } else {
      let resultObject: any = JSON.parse(result);
      this.correctAnswers = resultObject.correctAnswers;
      this.totalTime = resultObject.totalTime;
      this.startDate = resultObject.startDate;
      this.quizTotalQuestions= resultObject.quizTotalQuestions;
      this.quizDifficulty= resultObject.quizDifficulty;
      this.quizCategory= resultObject.quizCategory;
    }
  }

  navigateToHomePage(): void {
    this.router.navigate(['/'], {relativeTo: this.activatedRoute})
      .then(succeeded => {
      })
      .catch(error => {
        console.log("Routing to \"/\" error");
      });
  }

  navigateToUserStatsPage(): void {
    this.router.navigate(['/user-stats'], {relativeTo: this.activatedRoute})
      .then(succeeded => {
      })
      .catch(error => {
        console.log("Routing to \"/user-stats\" error");
      });
  }

  protected readonly toolbar = toolbar;
}
