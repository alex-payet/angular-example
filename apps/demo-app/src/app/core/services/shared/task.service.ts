import { Injectable } from '@angular/core';
import { Task } from '../../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  get(): Array<Task> {
    throw Error('Not implemented');
  }

  create(task: Task): number {
    throw Error('Not implemented');
  }

  update(task: Task, id: number): boolean {
    throw Error('Not implemented');
  }

  delete(id: number): boolean {
    throw Error('Not implemented');
  }
}
