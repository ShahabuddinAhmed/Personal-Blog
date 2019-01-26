import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-personal-post',
  templateUrl: './personal-post.component.html',
  styleUrls: ['./personal-post.component.scss']
})
export class PersonalPostComponent implements OnInit {

  public postType: string;
  public personalPostList: Post[];
  public post: Post;

  constructor(private _adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.getPostType();
  }

  private getPostType() {
    this.postType = 'Personal';
    this._adminService._getPostType(this.postType)
    .subscribe(data => {
      this.personalPostList = data;
      console.log(this.personalPostList);
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

  makePublic(ID: string) {
    this.post = new Post;
    this.post.postType = 'Public';
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
