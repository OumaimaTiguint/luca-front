import { QuestionsService } from './../../services/questions.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: string = '';
  publication: string = '';
  constructor(
    private router: Router,
    private questionsService: QuestionsService,
    private activatedRoute: ActivatedRoute
  ) { }

  navigate() {
    this.router.navigate(['/'])
  }

  update() {
    const questionId = this.activatedRoute.snapshot.paramMap.get('id');
    const { title, publication } = this;
    return this.questionsService.updateQuestion(title, publication, questionId)
    .subscribe(response => {
      console.log(response)
      this.router.navigate([""])
    }, error => {
      console.log({ error })
    })
  }

  ngOnInit(): void {
  }

}
