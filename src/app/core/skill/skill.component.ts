import { Component, OnInit } from '@angular/core';
import {Skill} from '../../model/skill';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  skills: Skill[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Skill[]>('http://localhost:8080/api/skills').subscribe(data => {
      this.skills = data;
    });
  }

}
