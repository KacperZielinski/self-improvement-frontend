import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '../../model/project/project';
import {ProjectTask} from '../../model/project/project-task';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [
    new Project('Self', 'Itself', [
      new ProjectTask('randomsly latin quote'),
      new ProjectTask('auth'),
      new ProjectTask('rollthedice, to choose'),
      new ProjectTask('pagination if too much'),
      new ProjectTask('improve that ugly layout'),
      new ProjectTask('unhardcode api links'),
      new ProjectTask('prepare full production build'),
      new ProjectTask('separate skill, projects, navbar as a module, use lazy loading!'),
      new ProjectTask('write unit test'),
      new ProjectTask('use cypress to test'),
    ])
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Project[]>('http://localhost:8080/api/projects').subscribe(
      data => this.projects = data
    );
  }
}
