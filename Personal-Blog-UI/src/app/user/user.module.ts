import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommentComponent } from './comment/comment.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ReadingPostComponent } from './reading-post/reading-post.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatInputModule } from '@angular/material/input';
import { AboutWriterComponent } from './about-writer/about-writer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatRippleModule, MatMenuModule, MatIconModule } from '@angular/material';
import { MatToolbarModule, MatSidenavModule, MatTooltipModule, MatListModule, MatTabsModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatRippleModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatTooltipModule,
    MatListModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    CommentComponent,
    EditProfileComponent,
    ReadingPostComponent,
    AboutWriterComponent
  ],
  exports: [
    AboutWriterComponent
  ]
})
export class UserModule { }
