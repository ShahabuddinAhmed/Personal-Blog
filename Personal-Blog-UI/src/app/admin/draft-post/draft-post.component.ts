import { Post } from './../../user/models/post';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-draft-post',
  templateUrl: './draft-post.component.html',
  styleUrls: ['./draft-post.component.scss']
})
export class DraftPostComponent implements OnInit {

  public postType: string;
  public draftPostList: Post[];
  public post: Post;

  constructor(private _adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.getPostType();
  }

  private getPostType() {
    this.postType = 'Draft';
    this._adminService._getPostType(this.postType)
    .subscribe(data => {
      this.draftPostList = data;
      console.log(this.draftPostList);
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

  deleteDraft(ID: string) {
    this._adminService._deletePost(ID)
    .subscribe(data => {
      console.log(data);
      this.getPostType();
    },
    err => {
      console.log(err);
    });
  }

}
