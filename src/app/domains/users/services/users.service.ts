import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPost } from '../models/users.models';
import { UsersServiceInterface } from './users.service.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService implements UsersServiceInterface {
  private readonly endpoint = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserPost[]> {
    return this.http.get<UserPost[]>(this.endpoint);
  }
}
