import { Question } from "./../models/question";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  questions: Question[];

  constructor() {
    this.questions = [
      {
        text: "What is you name?",
        answer: "My name is Boban.",
        hide: true
      },
      {
        text: "What is your favorite football club?",
        answer: "My favorite football club is FC Chelsea.",
        hide: true
      },
      {
        text: "What is your favorite language?",
        answer: "My favorite language is JavaScript.",
        hide: true
      }
    ];
  }

  getQuestions() {
    return this.questions;
  }
  addQuestion(question: Question) {
    this.questions.unshift(question);
  }
}
