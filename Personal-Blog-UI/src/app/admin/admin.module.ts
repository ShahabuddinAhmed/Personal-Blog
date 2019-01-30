import { UserModule } from './../user/user.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AboutComponent } from './about/about.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatRippleModule,
  MatTooltipModule,
  MatTabsModule
} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PostCatagoryComponent } from './post-catagory/post-catagory.component';
import { PublishedPostComponent } from './published-post/published-post.component';
import { PersonalPostComponent } from './personal-post/personal-post.component';
import { DraftPostComponent } from './draft-post/draft-post.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
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
    MatSelectModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    EditPostComponent,
    CreatePostComponent,
    AboutComponent,
    DashboardComponent,
    SidebarComponent,
    AdminPanelComponent,
    PostCatagoryComponent,
    PublishedPostComponent,
    PersonalPostComponent,
    DraftPostComponent
  ]
})
export class AdminModule { }
