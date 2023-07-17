import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ChartModule} from 'angular-highcharts';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageComponent} from './main-page/main-page.component';
import {QuizzesPageComponent} from './quizzes-page/quizzes-page.component';
import {ResultPageComponent} from './result-page/result-page.component';
import {StatisticsPageComponent} from './statistics-page/statistics-page.component';
import {ButtonComponent} from './button/button.component';
import {QuizBlockComponent} from './quiz-block/quiz-block.component';
import {QuizResultBlockComponent} from './quiz-result-block/quiz-result-block.component';
import {QuizzesStatsComponent} from './quizzes-stats/quizzes-stats.component';
import {ProgressSpinnerComponent} from './progress-spinner/progress-spinner.component';
import {LoadingInterceptor} from './loading.interceptor';

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
    ProgressSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}],
  bootstrap: [AppComponent]
})

export class AppModule {
}
