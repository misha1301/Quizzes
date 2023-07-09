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
        console.log('Route change detected');
      }
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.changeBtnParameters(event.url);
        console.log(event);
      }
      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }
  changeBtnParameters(currentRoute: string): void {
    switch (currentRoute) {
      case "/":
        this.btnClass = "blue";
        this.btnValue = "I`m lucky";
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
        this.navigateToQuizTest();
        break;
      case "/take-quiz":
        this.navigateToHomePage();
        break;
      default:
        this.navigateToHomePage();
    }
  }
  navigateToQuizTest(): void {
    this.router.navigate(['/take-quiz'], {relativeTo: this.activatedRoute})
      .then(succeeded => {
      })
      .catch(error => {
        console.log("Routing to \"take-quiz\" error");
      });
  }
  navigateToHomePage(): void {
    this.router.navigate(['/'], {relativeTo: this.activatedRoute})
      .then(succeeded => {
      })
      .catch(error => {
        console.log("Routing to \"/\" error");
      });
  }

}
