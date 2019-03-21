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
  public customFile: File = null;
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

  deletePersonal(ID: string) {
    this._adminService._deletePost(ID)
    .subscribe(data => {
      console.log(data);
      this.getPostType();
    },
    err => {
      console.log(err);
    });
  }

  fileChangeEvent(fileInput: any) {
    this.customFile = fileInput.target.files[0];
    // this.product.photo = fileInput.target.files[0]['name'];
    console.log(this.customFile);
  }

  upload(postID: string) {
    // this.userID = '5c49cbb4a2cb7302e022d4cc';
    this._adminService.updateProfileImage(this.customFile, postID).subscribe(data => {
      // console.log(data["message"]);
     console.log(data);
     this.getPostType();
    }, err => {
      console.log(err);
    });
  }

}
