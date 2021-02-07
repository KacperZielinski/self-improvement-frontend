import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillComponent } from './core/skill/skill.component';
import { SkillPartComponent } from './core/skill-part/skill-part.component';
import { ProjectComponent } from './core/project/project.component';
import { ProjectDetailsComponent } from './core/project-details/project-details.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    SkillPartComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
