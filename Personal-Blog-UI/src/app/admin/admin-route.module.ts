import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../admin/login/login.component';
import { RegisterComponent } from '../admin/register/register.component';
import { AboutComponent } from '../admin/about/about.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
  { path: 'admin-login', component: LoginComponent },
  { path: 'admin-register', component: RegisterComponent },
  { path: 'createpost', component: CreatePostComponent },
  { path: 'editpost', component: EditPostComponent },
  { path: 'about', component: AboutComponent }
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
export class AdminRouteModule { }
