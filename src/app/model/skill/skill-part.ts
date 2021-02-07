export class SkillPart {
  private _id: number;
  private _taskName: string;
  private _isDone: boolean;

  constructor(id: number, taskName: string, isDone: boolean) {
    this._id = id;
    this._taskName = taskName;
    this._isDone = isDone;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get taskName(): string {
    return this._taskName;
  }

  set taskName(value: string) {
    this._taskName = value;
  }

  get isDone(): boolean {
    return this._isDone;
  }

  set isDone(value: boolean) {
    this._isDone = value;
  }
}
