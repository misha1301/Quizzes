import {Component} from '@angular/core';
import {Router, ActivatedRoute, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'quizzes-nerdy-soft';
  btnClass: string = 'blue';
  btnValue: string = 'I`m lucky';
  currentRoute: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // console.log('Route change detected');
      }
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.changeBtnParameters(event.url);
        // console.log(event);
      }
      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }
  changeBtnParameters(currentRoute: string): void {
    switch (currentRoute) {
      case "/":
        let result: any = localStorage.getItem('stats');
        if (result == '' || result == null){
          this.btnClass = "none";
          this.btnValue = "My stats"
        }else{
          this.btnClass = "blue";
          this.btnValue = "My stats";
        }
        break;
      case "/take-quiz":
        this.btnClass = "yellow";
        this.btnValue = "Cancel quiz";
        break;
      default:
        this.btnClass = "blue";
        this.btnValue = "Home page";
    }
  }
  handleOnClick() {
    switch (this.currentRoute) {
      case "/":
        this.navigateToUserStatsPage();
        break;
      case "/take-quiz":
        localStorage.removeItem('quizzes');
        localStorage.removeItem('progress');
        localStorage.removeItem('answers');
        localStorage.removeItem('result');
        this.navigateToHomePage();
        break;
      default:
        localStorage.removeItem('result');
        this.navigateToHomePage();
    }
  }
  navigateToQuizTest(): void {
    this.router.navigate(['/take-quiz'], {relativeTo: this.activatedRoute})
      .then(succeeded => {
      })
      .catch(error => {
        console.log("Routing to \"take-quiz\" error: ", error);
      });
  }
  navigateToHomePage(): void {
    this.router.navigate(['/'], {relativeTo: this.activatedRoute})
      .then(succeeded => {
      })
      .catch(error => {
        console.log("Routing to \"/\" error: ", error);
      });
  }
  navigateToUserStatsPage(): void {
    this.router.navigate(['/user-stats'], {relativeTo: this.activatedRoute})
      .then(succeeded => {
      })
      .catch(error => {
        console.log("Routing to \"/user-stats\" error: ", error);
      });
  }
}
