import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Post } from './admin/models/post';
import { Catagory } from './admin/models/catagory';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private router: Router) { }

  jwtHelper = new JwtHelperService();

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/post/all');
  }

  getCountPost(name: string): Observable<Post[]> {
    return this.http.get<Post[]>(`http://localhost:3000/post/count/${name}`);
  }

  getCatagoryName(): Observable<Catagory[]> {
    return this.http.get<Catagory[]>('http://localhost:3000/catagory/all');
  }

}
