import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CreatePostComponent
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    EditPostComponent,
    CreatePostComponent,
    AboutComponent
  ]
})
export class AdminModule { }
