import { UserModule } from './../user/user.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AboutComponent } from './about/about.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    UserModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    EditPostComponent,
    CreatePostComponent,
    AboutComponent
  ]
})
export class AdminModule { }
