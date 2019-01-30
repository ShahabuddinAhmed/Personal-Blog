import { Register } from './models/register';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Catagory } from './models/catagory';
import { Post } from './models/post';
import { Login } from './models/login';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router: Router) { }

  jwtHelper = new JwtHelperService();

  addPost(_post: Post) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/post/create', _post, httpOptions);
  }

  addCatagory(_catagory: Catagory) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/catagory/create', _catagory, httpOptions);
  }

  addNewAdmin(_register: Register) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/admin/register', _register, httpOptions);
  }

  getAllAdmin(): Observable<Register[]> {
    return this.http.get<Register[]>('http://localhost:3000/admin/all');
  }

  _deleteAdmin(id: string) {
    return this.http.delete(`http://localhost:3000/admin/delete/${id}`);
  }

  getCatagoryName(): Observable<Catagory[]> {
    return this.http.get<Catagory[]>('http://localhost:3000/catagory/all');
  }

  reqLogin(_login: Login) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/admin/login', _login, httpOptions);
  }

  setToken(adminAuth: any) {
    localStorage.setItem('adminToken', adminAuth.token);
  }

  _deleteCatagoryList(id: string) {
    return this.http.delete(`http://localhost:3000/catagory/delete/${id}`);
  }

  _getPostType(id: string): Observable<Post[]> {
    return this.http.get<Post[]>(`http://localhost:3000/post/post-type/${id}`);
  }

  _changePostType(id: string, _post: Post) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.patch(`http://localhost:3000/post/updateone/${id}`, _post, httpOptions);
  }

  _deletePost(id: string) {
    return this.http.delete(`http://localhost:3000/post/delete/${id}`);
  }

  updateProfileImage(image: File, userId: string) {
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    const fd = new FormData();
    fd.append('picture', image, image.name);
    fd.append('userId', userId);
    return this.http.patch(`http://localhost:3000/post/update/${userId}`, fd, httpOptions);
  }
}
