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

}
