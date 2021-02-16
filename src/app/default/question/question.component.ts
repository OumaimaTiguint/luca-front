import { QuestionsService } from './../../services/questions.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  loadedQ: Observable<any>;
  title: string;
  publication: string;
  id: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private questionsService: QuestionsService,
    private router: Router
  ) { }

  navigate() {
    this.router.navigate([""])
  }

  delete() {
    this.questionsService.deleteQuestion(this.id).subscribe(() => console.log("qst deleted"));
    this.router.navigate(["/"])
  }

  update() {
    this.router.navigate(["/update", this.id]);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')) {
        return;
      }
      const questionId = paramMap.get('id');
      this.loadedQ = this.questionsService.getQuestionById(questionId);
    });
    this.loadedQ.subscribe(value => {
      const {title, publication, _id } = value;
      this.title = title;
      this.publication = publication;
      this.id = _id
    })
}

}
