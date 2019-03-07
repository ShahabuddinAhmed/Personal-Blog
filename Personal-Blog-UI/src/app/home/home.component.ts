import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../admin/models/post';
import { AppService } from '../app.service';
import { Catagory } from '../admin/models/catagory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public allPost: Post[];
  public count: any;
  public catagoryName: Catagory[];

  constructor(private activeRoute: ActivatedRoute, private _appService: AppService, private router: Router) { }

  ngOnInit() {
    this.getPost();
    this.getCatagory();
  }

  private getPost() {
    this._appService.getAllPost().subscribe(data => {
      this.allPost = data;
      console.log(this.allPost);
    },
    err => {
      console.log(err);
    }
      );
  }

  private getCatagory() {
    this._appService.getCatagoryName().subscribe(data => {
      this.catagoryName = data;
      console.log(this.catagoryName);
    },
    err => {
      console.log(err);
    }
      );
  }


}
