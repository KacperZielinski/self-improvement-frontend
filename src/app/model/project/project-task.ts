export class ProjectTask {
  private _task: string;

  constructor(content: string) {
    this._task = content;
  }

  get task(): string {
    return this._task;
  }

  set task(value: string) {
    this._task = value;
  }
}
