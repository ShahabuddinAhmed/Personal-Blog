import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from '../user/register/register.component';
import { CommentComponent } from '../user/comment/comment.component';
import { EditProfileComponent } from '../user/edit-profile/edit-profile.component';
import { ReadingPostComponent } from './reading-post/reading-post.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'edit/:id', component: EditProfileComponent },
  { path: 'comment', component: CommentComponent },
  { path: 'readingpost/:id', component: ReadingPostComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class UserRouteModule { }
