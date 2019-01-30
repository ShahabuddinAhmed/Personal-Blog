import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../models/register';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  hide = true;
  hide1 = true;
  public Register: FormGroup;
  public name: FormControl;
  public email: FormControl;
  public password: FormControl;
  public confirmPassword: FormControl;
  register: Register;
  public adminList: Register[];
  public len: number;

  private createFormGroup(): void {
    this.Register = new  FormGroup( {
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

  private createFormControls(): void {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(6),
      Validators.maxLength(60)
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ]);
    this.confirmPassword = new FormControl('', [
      Validators.required
    ]);
  }
  
  constructor(private _adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();
    this.getAdmin();
  }

  onSubmit() {
    this.register = new Register();
    this.register.adminName = this.name.value;
    this.register.adminEmail = this.email.value;
    this.register.adminPassword = this.password.value;
    this.register.adminConfirmPassword = this.confirmPassword.value;
    this._adminService.addNewAdmin(this.register)
    .subscribe(data => {
      this.router.navigate(['/admin']);
      console.log('successfully');
    },
    error => {
      console.error(error);
    }
    );
  }

  private getAdmin() {
    this._adminService.getAllAdmin().subscribe(data => {
      this.adminList = data;
      this.len = this.adminList.length;
      console.log(this.adminList);
    },
    err => {
      console.log(err);
    }
      );
  }

  deleteAdmin(ID: string) {
    this._adminService._deleteAdmin(ID)
    .subscribe(data => {
      this.getAdmin();
    },
    err => {
      console.log(err);
    });
  }

}
