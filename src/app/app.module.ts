import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { QuizzesPageComponent } from './quizzes-page/quizzes-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { ButtonComponent } from '../components/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    QuizzesPageComponent,
    ResultPageComponent,
    StatisticsPageComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
