import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get("http://localhost:5000/")
  }

  postQuestion(title, publication) {
    return this.http.post("http://localhost:5000/add", {title, publication})
  }

  getQuestionById(id:string) {
    return this.http.get("http://localhost:5000/" + id)
  }

  deleteQuestion(id:string) {
    return this.http.delete("http://localhost:5000/" + id)
  }

  updateQuestion(title, publication, id) {
    return this.http.post("http://localhost:5000/update/" + id, {title, publication})
  }
}
