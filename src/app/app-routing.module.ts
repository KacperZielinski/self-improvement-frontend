import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SkillComponent} from './core/skill/skill.component';
import {ProjectComponent} from './core/project/project.component';

const routes: Routes = [
  { path: 'skills', component: SkillComponent},
  { path: 'projects', component: ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
