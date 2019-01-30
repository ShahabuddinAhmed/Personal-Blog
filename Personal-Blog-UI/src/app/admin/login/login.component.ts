import { Login } from './../models/login';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  public loginForm: FormGroup;
  public email: FormControl;
  public password: FormControl;
  login: Login;

  private createForm(): void {
    this.loginForm = new FormGroup( {
      email: this.email,
      password: this.password
    });
  }
  private CreateFormControls(): void {
    this.email = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(60),
      Validators.email
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(100)
    ]);
  }

  constructor(private _adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.CreateFormControls();
    this.createForm();
  }

  onSubmit() {
    this.login = new Login();
    this.login.adminEmail = this.email.value;
    this.login.adminPassword = this.password.value;
    this._adminService.reqLogin(this.login)
    .subscribe(data => {
      console.log(data);
      this._adminService.setToken(data);
      this.router.navigate(['/']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
