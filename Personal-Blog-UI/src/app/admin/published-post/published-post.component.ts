import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-published-post',
  templateUrl: './published-post.component.html',
  styleUrls: ['./published-post.component.scss']
})
export class PublishedPostComponent implements OnInit {

  public postType: string;
  public publishedPostList: Post[];
  public post: Post;

  constructor(private _adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.getPostType();
  }

  private getPostType() {
    this.postType = 'Public';
    this._adminService._getPostType(this.postType)
    .subscribe(data => {
      this.publishedPostList = data;
      console.log(this.publishedPostList);
    },
    err => {
      console.log(err);
    });
  }

  makeDraft(ID: string) {
    this.post = new Post;
    this.post.postType = 'Draft';
    this._adminService._changePostType(ID, this.post)
    .subscribe(data => {
      console.log(data);
      this.getPostType();
    },
    err => {
      console.log(err);
    });
  }

  makePersonal(ID: string) {
    this.post = new Post;
    this.post.postType = 'Personal';
    this._adminService._changePostType(ID, this.post)
    .subscribe(data => {
      console.log(data);
      this.getPostType();
    },
    err => {
      console.log(err);
    });
  }

}
