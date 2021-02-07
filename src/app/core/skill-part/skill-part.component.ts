import {Component, Input, OnInit} from '@angular/core';
import {SkillPart} from '../../model/skill/skill-part';

@Component({
  selector: 'app-skill-part',
  templateUrl: './skill-part.component.html',
  styleUrls: ['./skill-part.component.scss']
})
export class SkillPartComponent implements OnInit {
  @Input() skillPart: SkillPart;

  constructor() { }

  ngOnInit(): void {
  }

}
