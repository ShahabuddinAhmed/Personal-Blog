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
  public customFile: File = null;
  public userID: string;

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

  deletePublished(ID: string) {
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

  // upload() {
  //   const userID = '5c49cbb4a2cb7302e022d4cc';
  //   const fd = new FormData();
  //     fd.append('picture', this.customFile, this.customFile.name);
  //     fd.append('userId', userID);
  //     this._adminService._uploadCoverImage(this.customFile, userID).subscribe(data => {
  //       // console.log(data["message"]);
  //      console.log(data);
  //     }, err => {
  //       console.log(err);
  //     });
  // }

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

  editPublishedPost(id: string) {
    this.router.navigate([`editpublishedpost/${id}`]);
  }

}
