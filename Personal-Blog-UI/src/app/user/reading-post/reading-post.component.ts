import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-reading-post',
  templateUrl: './reading-post.component.html',
  styleUrls: ['./reading-post.component.scss']
})
export class ReadingPostComponent implements OnInit {

  public PostID: string;
  public readingPost: Post;
  public len: number;

  constructor(private _userService: UserService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getPostID();
    this.getOnePost(this.PostID);
  }

  private getPostID() {
    this.activeRoute.params.subscribe(param => {
      this.PostID = param['id'];
      console.log(this.PostID);
    });
  }

  private getOnePost(ID: string) {
    this._userService._getOnePost(ID)
    .subscribe(data => {
      this.readingPost = data;
      this.len = this.readingPost.article.length;
    },
    err => {
      console.log(err);
    });
  }

}
