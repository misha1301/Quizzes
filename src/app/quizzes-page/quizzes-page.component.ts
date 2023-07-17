import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quizzes-page',
  templateUrl: './quizzes-page.component.html',
  styleUrls: ['./quizzes-page.component.css']
})

export class QuizzesPageComponent implements OnInit {

  quizName: string;  //quiz name (category)
  quizzesArr: any[] = []; //array of quizzes
  quizzesProgress: any; //data for last taken quiz
  currentQuestion: number; //number of current question
  quizQuestion: string = ''; //current question for user
  quizAnswer: string[] = []; //current answers for the question
  currentAnswer: any; //user`s answer
  totalQuestion: number = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.quizName = '';
    this.currentQuestion = 0;
    this.currentAnswer = '';
  }

  ngOnInit() {
    let quizzes: any = localStorage.getItem('quizzes');
    if (quizzes == null || quizzes == '') {
      this.navigateToHomePage();
    } else {
      this.quizzesArr = JSON.parse(quizzes);
      let progress: any = localStorage.getItem('progress');
      if (progress == null || progress == '') {
        localStorage.setItem('progress', JSON.stringify({
          "quizCategory": this.quizzesArr[0].category,
          "quizDifficulty": this.quizzesArr[0].difficulty,
          "quizTotalQuestions": this.quizzesArr.length,
          "startDate": new Date(),
          "quizCurrentQuestion": 0
        }));
        this.quizName = this.quizzesArr[0].category;
        this.totalQuestion = this.quizzesArr.length;
        this.currentQuestion = 0;
      } else {
        this.quizzesProgress = JSON.parse(progress);
        this.currentQuestion = this.quizzesProgress.quizCurrentQuestion;
        this.quizName = this.quizzesProgress.quizCategory;
        this.totalQuestion = this.quizzesProgress.quizTotalQuestions;
      }
      this.initQuestionByCurrentPos();
    }
  }

  answerHandler(event: Event) {
    this.currentAnswer = (event.target as HTMLInputElement).value;
  }

  goNextQuestion() {
    if (this.currentAnswer != '') {
      this.saveQuizzesData(this.currentQuestion);
      if (this.currentQuestion + 1 < this.quizzesArr.length) {
        this.currentQuestion++;
        this.initQuestionByCurrentPos();
      } else {
        this.currentAnswer = '';
        this.checkResults();
        this.removeLocalStorageItem();
        this.navigateToQuizResultPage();
      }
    }
    this.currentAnswer = '';
  }

  initQuestionByCurrentPos() {
    let temp: any;
    this.quizQuestion = (this.quizzesArr[this.currentQuestion].question);//.replaceAll('&quot;', '"');
    temp = this.quizzesArr[this.currentQuestion].answers;
    this.quizAnswer = temp.sort((a: number, b: number) => 0.5 - Math.random());
  }

  navigateToHomePage(): void {
    this.router.navigate(['/'], {relativeTo: this.activatedRoute})
      .then(succeeded => {
      })
      .catch(error => {
        console.log("Routing to \"/\" error");
      });
  }

  navigateToQuizResultPage(): void {
    this.router.navigate(['/quiz-results'], {relativeTo: this.activatedRoute})
      .then(succeeded => {
      })
      .catch(error => {
        console.log("Routing to \"/quiz-results\" error");
      });
  }

  saveQuizzesData(n: number) {
    let progress: any = localStorage.getItem('progress');
    if (progress != '' || progress != null) {
      this.quizzesProgress = JSON.parse(progress);
      if (n < this.totalQuestion - 1)
        this.quizzesProgress.quizCurrentQuestion = n + 1;
      localStorage.setItem('progress', JSON.stringify(this.quizzesProgress));
    }
    let answers: any = localStorage.getItem('answers');
    if (answers == null || answers == '') {
      localStorage.setItem('answers', JSON.stringify([
        this.currentAnswer
      ]));
    } else {
      let answers: any = localStorage.getItem('answers');
      let tempArr: any;
      if (answers != '' || answers != null) {
        tempArr = JSON.parse(answers);
        if (this.quizzesArr.length != tempArr.length) {
          if (this.currentQuestion == tempArr.length) {
            localStorage.setItem('answers', JSON.stringify([
              ...tempArr, this.currentAnswer
            ]));
          }
        }
      }
    }
  }

  checkResults() {
    let quizzes: any = localStorage.getItem('quizzes');
    let answers: any = localStorage.getItem('answers');
    let progress: any = localStorage.getItem('progress');

    let totalMark: number = 0;
    let tempAnswers: any = JSON.parse(answers);
    console.log(tempAnswers);
    let tempQuizzes: any = JSON.parse(quizzes);
    console.log(tempQuizzes);
    let tempProgress: any = JSON.parse(progress);
    console.log(tempProgress);
    for (let i: number = 0; i < tempQuizzes.length; i++) {
      if (tempQuizzes[i].answers[0].toString() == tempAnswers[i].toString()) {
        totalMark++;
      }
    }

    const startedDate: Date = new Date(tempProgress.startDate);
    const endDate: Date = new Date();

    const msBetweenDates = endDate.getTime() - startedDate.getTime();

    localStorage.setItem('result', JSON.stringify({
      "quizCategory": tempProgress.quizCategory,
      "quizDifficulty": tempProgress.quizDifficulty,
      "quizTotalQuestions": tempQuizzes.length,
      "startDate": tempProgress.startDate,
      "totalTime": msBetweenDates,
      "correctAnswers": totalMark
    }));

    let userStats: any = localStorage.getItem('stats');
    if (userStats == null || userStats == '') {
      localStorage.setItem('stats', JSON.stringify(
        [{
          "quizCategory": tempProgress.quizCategory,
          "quizDifficulty": tempProgress.quizDifficulty,
          "quizTotalQuestions": tempQuizzes.length,
          "startDate": tempProgress.startDate,
          "totalTime": msBetweenDates,
          "correctAnswers": totalMark
        }]
      ));
    } else {
      let tempUserStats: any = JSON.parse(userStats);
      localStorage.setItem('stats', JSON.stringify(
        [
          ...tempUserStats,
          {
            "quizCategory": tempProgress.quizCategory,
            "quizDifficulty": tempProgress.quizDifficulty,
            "quizTotalQuestions": tempQuizzes.length,
            "startDate": tempProgress.startDate,
            "totalTime": msBetweenDates,
            "correctAnswers": totalMark
          }]
      ));
    }
  }

  removeLocalStorageItem() {
    localStorage.removeItem('quizzes');
    localStorage.removeItem('progress');
    localStorage.removeItem('answers');
  }

}

