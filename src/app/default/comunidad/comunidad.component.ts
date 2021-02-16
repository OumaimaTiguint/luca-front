import { QuestionsService } from './../../services/questions.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.scss']
})
export class ComunidadComponent implements OnInit {
  posts: Observable<any>
  constructor(
    private router: Router,
    private questionsService: QuestionsService
  ) { }

  navigate() {
    this.router.navigate(['/post'])
  }

  ngOnInit(): void {
    this.posts = this.questionsService.getQuestions();
  }

}
