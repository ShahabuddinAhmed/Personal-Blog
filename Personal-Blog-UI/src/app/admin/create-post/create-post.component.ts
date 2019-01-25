import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Post } from '../models/post';
import { Catagory } from '../models/catagory';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  public createPostForm: FormGroup;
  public title: FormControl;
  public catagory: FormControl;
  public postType: FormControl;
  public article: FormControl;
  post: Post;
  public postList: Post[];
  public catagoryList: Catagory[];

  private createForm(): void {
    this.createPostForm = new FormGroup( {
      title: this.title,
      catagory: this.catagory,
      postType: this.postType,
      article: this.article
    });
  }

  private CreateFormControls(): void {
    this.title = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(60)
    ]);

    this.catagory = new FormControl('', [
      Validators.required
    ]);

    this.postType = new FormControl('', [
      Validators.required
    ]);

    this.article = new FormControl('', [
      Validators.required,
      Validators.minLength(150),
      Validators.maxLength(10000)
    ]);
  }

  constructor(private _adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.CreateFormControls();
    this.createForm();
    this.getCatagory();
  }

  onSubmit() {
    this.post = new Post();
    this.post.title = this.title.value;
    this.post.catagory = this.catagory.value;
    this.post.postType = this.postType.value;
    this.post.article = this.article.value;
    this.post.publishedDate = formatDate(new Date(), 'dd MMM yyyy', 'en');
    this._adminService.addPost(this.post)
    .subscribe(data => {
      this.router.navigate(['/admin']);
      console.log(this.post);
    },
    err => {
      console.log(err);
    });
  }

  private getCatagory() {
    this._adminService.getCatagoryName().subscribe(data => {
      this.catagoryList = data;
      console.log(this.catagoryList);
    },
    err => {
      console.log(err);
    }
      );
  }

}
