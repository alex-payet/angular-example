import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { User } from '../../models/data.model';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
    expect(service.get().length).toBe(0);
  });

  afterEach(() => {
    service.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should no have user', () => {
    // GIVEN
    const count: number = service.get().length;
    // WHEN
    expect(count).toBe(0);
  });

  it('should be add user', () => {
    // GIVEN
    const count: number = service.get().length;
    const demo: User = {name : 'demo', password : 'nope'}; 
    // WHEN
    service.create(demo);
    // THEN
    expect(count + 1).toBe(service.get().length);
  });

  it('should be get user id', () => {
    // GIVEN
    const demo: User =  {name : 'demo', password : 'nope'};
    // WHEN
    const id = service.create(demo);
    // THEN
    expect(id).toBe(1);
  });

});
