import { NavbarComponent } from './../shared/navbar/navbar.component';
import { SideNavbarComponent } from './../shared/side-navbar/side-navbar.component';
import { DefaultRoutingModule } from './default-routing.module';
import { PostComponent } from './post/post.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    ComunidadComponent,
    PostComponent,
    SideNavbarComponent,
    NavbarComponent,
    QuestionComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DefaultModule { }
