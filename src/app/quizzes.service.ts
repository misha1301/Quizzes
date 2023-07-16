import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const URL: string = 'https://opentdb.com/api.php?';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  constructor(private http: HttpClient) {
  }
  getQuizzes(url: string):Observable<IResponseResult> {
    return this.http.get<IResponseResult>(URL + url);
  }
}
interface IResponseResult {
  response_code: number,
  results: string[]
}

