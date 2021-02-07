import {ProjectTask} from './project-task';

export class Project {
  private _name: string;
  private _description: string;
  private _tasks: ProjectTask[];

  constructor(name: string, description: string, tasks: ProjectTask[]) {
    this._name = name;
    this._description = description;
    this._tasks = tasks;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get tasks(): ProjectTask[] {
    return this._tasks;
  }

  set tasks(value: ProjectTask[]) {
    this._tasks = value;
  }
}
