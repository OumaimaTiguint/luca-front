import { QuestionsService } from './../../services/questions.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title: string = '';
  publication: string = '';

  constructor(
    private router: Router,
    private questionsService: QuestionsService
  ) { }

  navigate() {
    this.router.navigate([''])
  }

  submit() {
    const { title, publication } = this;
    this.questionsService.postQuestion(title, publication)
    .subscribe(response => {
      console.log(response)
      this.router.navigate([""])
    }, error => {
      console.log({ error })
    })
  }

  ngOnInit(): void {}

}
