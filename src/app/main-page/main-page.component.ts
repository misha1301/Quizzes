import {Component} from '@angular/core';
import {QuizzesService} from '../quizzes.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable, Observer} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  testQuiz: any[] = [];

  constructor(
    private user: QuizzesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  onHandlerStartQuiz(urlParam: string) {
    localStorage.removeItem('quizzes');
    localStorage.removeItem('progress');
    localStorage.removeItem('answers');
    localStorage.removeItem('result');
    this.loadQuizzes(urlParam);
  }

  formQuizzesForTest(quizzes: any[]) {
    let temp;
    this.testQuiz = [];
    quizzes.map((quiz) => {
      temp = {
        "category": quiz.category,
        "difficulty": quiz.difficulty,
        "question": this.decode(quiz.question),
        "answers": [
          this.decode(quiz.correct_answer),
          ...this.decodeArr(quiz.incorrect_answers)
        ]
      }
      this.testQuiz = [...this.testQuiz, temp]
    })
    localStorage.setItem('quizzes', JSON.stringify(this.testQuiz));
    this.navigateToQuizTest();
  }

  loadQuizzes(urlParam: string) {
    let response: any[] = [];
    this.user.getQuizzes(urlParam)
      .subscribe(res => {
        console.log(res);
        //this.quizzesArr = res.results;
        this.formQuizzesForTest(res.results);
      })
  }

  clickEvent() {
    console.log("click");
  }

  decode(str: string) : string | null{
    let txt: Document = new DOMParser().parseFromString(str, "text/html");
    return txt.documentElement.textContent;
  }
  decodeArr(arr: string[]){
    let tempArr:any[] = [];
    arr.map((qu:string) => {
      return tempArr.push(this.decode(qu));
    })
    return tempArr;
  }

  navigateToQuizTest(): void {
    this.router.navigate(['/take-quiz'], {relativeTo: this.activatedRoute})
      .then(succeeded => {
      })
      .catch(error => {
        console.log("Routing to \"take-quiz\" error");
      });
  }

}

