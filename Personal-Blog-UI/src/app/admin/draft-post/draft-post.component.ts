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

}
