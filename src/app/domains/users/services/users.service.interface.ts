import { Observable } from 'rxjs';
import { UserPost } from '../models/users.models';

export interface UsersServiceInterface {
  getUsers(): Observable<UserPost[]>;
}
