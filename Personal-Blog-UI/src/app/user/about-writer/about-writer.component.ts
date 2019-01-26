import { Post } from './../models/post';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Catagory } from '../models/catagory';

@Component({
  selector: 'app-about-writer',
  templateUrl: './about-writer.component.html',
  styleUrls: ['./about-writer.component.scss']
})
export class AboutWriterComponent implements OnInit {

  public allPost: Post[];
  public catagoryName: Catagory[];

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getPost();
    this.getCatagory();
  }

  private getPost() {
    this._userService.getAllPost().subscribe(data => {
      this.allPost = data;
      console.log(this.allPost);
    },
    err => {
      console.log(err);
    }
      );
  }

  private getCatagory() {
    this._userService.getCatagoryName().subscribe(data => {
      this.catagoryName = data;
      console.log(this.catagoryName);
    },
    err => {
      console.log(err);
    }
      );
  }

}
