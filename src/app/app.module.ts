import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageComponent} from './main-page/main-page.component';
import {QuizzesPageComponent} from './quizzes-page/quizzes-page.component';
import {ResultPageComponent} from './result-page/result-page.component';
import {StatisticsPageComponent} from './statistics-page/statistics-page.component';
import {ButtonComponent} from '../components/button/button.component';
import {QuizBlockComponent} from '../components/quiz-block/quiz-block.component';
import {QuizResultBlockComponent} from '../components/quiz-result-block/quiz-result-block.component';
import {QuizzesStatsComponent} from '../components/quizzes-stats/quizzes-stats.component';
import {PieDiagramComponent} from '../components/pie-diagram/pie-diagram.component';
import {NgApexchartsModule} from "ng-apexcharts";
import {ProgressSpinnerComponent} from '../components/progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    QuizzesPageComponent,
    ResultPageComponent,
    StatisticsPageComponent,
    ButtonComponent,
    QuizBlockComponent,
    QuizResultBlockComponent,
    QuizzesStatsComponent,
    PieDiagramComponent,
    ProgressSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
