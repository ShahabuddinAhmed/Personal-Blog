import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../models/register';

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
  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();
  }

  onSubmit() {
    this.register = new Register();
    this.register.userName = this.name.value;
    this.register.userEmail = this.email.value;
    this.register.userPassword = this.password.value;
    this.register.userConfirmPassword = this.confirmPassword.value;
  }

}
