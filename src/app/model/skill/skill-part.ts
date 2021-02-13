export class SkillPart {
  private _id: number;
  private _task: string;
  private _done: boolean;

  constructor(id: number, taskName: string, isDone: boolean) {
    this._id = id;
    this._task = taskName;
    this._done = isDone;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get task(): string {
    return this._task;
  }

  set task(value: string) {
    this._task = value;
  }

  get done(): boolean {
    return this._done;
  }

  set done(value: boolean) {
    this._done = value;
  }
}
