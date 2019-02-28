import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-editpublishedpost',
  templateUrl: './editpublishedpost.component.html',
  styleUrls: ['./editpublishedpost.component.scss']
})
export class EditpublishedpostComponent implements OnInit {

  constructor(private _adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }



}
