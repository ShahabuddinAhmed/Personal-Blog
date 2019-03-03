import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public draftNum: number;
  public publicNum: number;
  public personalNum: number;

  constructor(private _adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.getDraftNum('Draft');
    this.getPublicNum('Public');
    this.getPersonalNum('Personal');
  }

  private getDraftNum(Name: string) {
    this._adminService._getPostType(Name)
    .subscribe(data => {
      console.log(data);
      this.draftNum = data.length;
    },
    err => {
      console.log(err);
    });
  }

  private getPublicNum(Name: string) {
    this._adminService._getPostType(Name)
    .subscribe(data => {
      console.log(data);
      this.publicNum = data.length;
    },
    err => {
      console.log(err);
    });
  }

  private getPersonalNum(Name: string) {
    this._adminService._getPostType(Name)
    .subscribe(data => {
      console.log(data);
      this.personalNum = data.length;
    },
    err => {
      console.log(err);
    });
  }

}
