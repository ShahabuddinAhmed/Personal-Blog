import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../admin/login/login.component';
import { RegisterComponent } from '../admin/register/register.component';
import { AboutComponent } from '../admin/about/about.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PostCatagoryComponent } from './post-catagory/post-catagory.component';
import { PublishedPostComponent } from './published-post/published-post.component';
import { PersonalPostComponent } from './personal-post/personal-post.component';
import { DraftPostComponent } from './draft-post/draft-post.component';

const routes: Routes = [
  { path: 'admin-login', component: LoginComponent },
  { path: 'admin-register', component: RegisterComponent },
  { path: 'createpost', component: CreatePostComponent },
  { path: 'editpost', component: EditPostComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'postcatagory', component: PostCatagoryComponent },
  { path: 'adminpanel', component: AdminPanelComponent },
  { path: 'published', component: PublishedPostComponent },
  { path: 'personal', component: PersonalPostComponent },
  { path: 'draft', component: DraftPostComponent }
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
