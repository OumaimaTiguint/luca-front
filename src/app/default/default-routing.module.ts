import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { PostComponent } from './post/post.component';
import { QuestionComponent } from './question/question.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
    { path: "", component: ComunidadComponent},
    { path: "post", component: PostComponent},
    { path: ":id", component: QuestionComponent},
    { path: "update/:id", component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }