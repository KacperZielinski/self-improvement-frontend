import {SkillPart} from './skill-part';
import {SkillType} from './skill-type.enum';

export class Skill {
  private _id: number;
  private _skillName: string;
  private _skillType: SkillType;
  private _skills: SkillPart[];

  constructor(id: number, skillName: string, skillType: SkillType, skills: SkillPart[]) {
    this._id = id;
    this._skillName = skillName;
    this._skillType = skillType;
    this._skills = skills;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get skillName(): string {
    return this._skillName;
  }

  set skillName(value: string) {
    this._skillName = value;
  }

  get skillType(): SkillType {
    return this._skillType;
  }

  set skillType(value: SkillType) {
    this._skillType = value;
  }

  get skills(): SkillPart[] {
    return this._skills;
  }

  set skills(value: SkillPart[]) {
    this._skills = value;
  }
}
