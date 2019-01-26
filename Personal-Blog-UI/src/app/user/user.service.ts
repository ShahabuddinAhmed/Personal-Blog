import { Register } from './models/register';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Login } from './models/login';

import { Catagory } from './models/catagory';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  jwtHelper = new JwtHelperService();

  addNewUser(_register: Register) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/user/register', _register, httpOptions);
  }

  reqLogin(_login: Login) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/user/login', _login, httpOptions);
  }

  setToken(auth: any) {
    localStorage.setItem('token', auth.token);
  }

  _getOnePost(id: string): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3000/post/readingpost/${id}`);
  }

  getCatagoryName(): Observable<Catagory[]> {
    return this.http.get<Catagory[]>('http://localhost:3000/catagory/all');
  }

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/post/all');
  }
}
