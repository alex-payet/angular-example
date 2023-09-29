import { Injectable } from '@angular/core';
import { User } from '../../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get(): Array<User> {
    throw Error('Not implemented');
  }

  create(user: User): number {
    throw Error('Not implemented');
  }

  update(user: User, id: number): boolean {
    throw Error('Not implemented');
  }

  delete(): boolean {
    throw Error('Not implemented');
  }

  clear(): boolean {
    throw Error('Not implemented');
  }
}
