import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {QuizzesPageComponent} from "./quizzes-page/quizzes-page.component";
import {ResultPageComponent} from "./result-page/result-page.component";
import {StatisticsPageComponent} from "./statistics-page/statistics-page.component";

const routes: Routes = [
  {path: "", component:MainPageComponent},
  {path: "take-quiz", component:QuizzesPageComponent},
  {path: "quiz-results", component:ResultPageComponent},
  {path: "user-stats", component:StatisticsPageComponent},
  {path: "**", component:MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
