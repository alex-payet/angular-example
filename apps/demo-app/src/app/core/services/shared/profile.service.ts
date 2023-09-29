import { Injectable } from '@angular/core';
import { Profile } from '../../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  get(): Array<Profile> {
    throw Error('Not implemented');
  }

  create(profile: Profile): number {
    throw Error('Not implemented');
  }

  update(profile: Profile, id: number): boolean {
    throw Error('Not implemented');
  }

  delete(id: number): boolean {
    throw Error('Not implemented');
  }
}
