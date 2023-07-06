import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesPageComponent } from './quizzes-page.component';

describe('QuizzesPageComponent', () => {
  let component: QuizzesPageComponent;
  let fixture: ComponentFixture<QuizzesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizzesPageComponent]
    });
    fixture = TestBed.createComponent(QuizzesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
