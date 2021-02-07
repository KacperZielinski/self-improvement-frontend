import {Component, OnInit} from '@angular/core';
import {Skill} from '../../model/skill/skill';
import {HttpClient} from '@angular/common/http';
import {SkillType} from '../../model/skill/skill-type.enum';
import {SkillPart} from '../../model/skill/skill-part';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  skills: Skill[] = [
    new Skill(999, 'Lackofskill', SkillType.OTHER, [
      new SkillPart(912, 'go to hell', true),
      new SkillPart(913, 'go to heaven', false)
    ])
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Skill[]>('http://localhost:8080/api/skills').subscribe(
      data => this.skills = data
    );
  }

}
