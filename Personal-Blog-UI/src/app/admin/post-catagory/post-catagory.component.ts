import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Catagory } from '../models/catagory';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-post-catagory',
  templateUrl: './post-catagory.component.html',
  styleUrls: ['./post-catagory.component.scss']
})
export class PostCatagoryComponent implements OnInit {

  public postCatagoryForm: FormGroup;
  public catagoryName: FormControl;
  catagory: Catagory;
  public catagoryList: Catagory[];

  private createForm(): void {
    this.postCatagoryForm = new FormGroup( {
      catagoryName: this.catagoryName
    });
  }
  private CreateFormControls(): void {
    this.catagoryName = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(60)
    ]);
  }

  constructor(private _adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.CreateFormControls();
    this.createForm();
    this.getCatagory();
  }

  onSubmit() {
    this.catagory = new Catagory();
    this.catagory.catagoryName = this.catagoryName.value;
    this._adminService.addCatagory(this.catagory)
    .subscribe(data => {
      this.router.navigate(['/']);
    },
    err => {
      console.log(err);
    }
    );
    console.log(this.catagoryName);
  }

  private getCatagory() {
    this._adminService.getCatagoryName().subscribe(data => {
      this.catagoryList = data;
      console.log(this.catagoryList);
    },
    err => {
      console.log(err);
    }
      );
  }

  deleteCatagory(ID: string) {
    this._adminService._deleteCatagoryList(ID)
    .subscribe(data => {
      console.log(data);
      this.getCatagory();
    },
    err => {
      console.log(err);
    });
  }

}
